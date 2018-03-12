import axios from "axios";
import * as fs from "fs";
import * as glob from "glob";
import load from "load-json-file";
import * as path from "path";
import {downloadTile, Layer} from "sharedstreets-api";
import test from "tape";
import write from "write-json-file";
import * as sharedstreetsPbf from "./";

const layers: Layer[] = ["geometry", "intersection", "metadata", "reference"];
const tile = [12, 1186, 1466];
const [z, x, y] = tile;

// Download Tile
// Set Environment Variable `export DOWNLOAD=true` to regenerate
if (process.env.DOWNLOAD) {
  layers.forEach((layer) => {
    downloadTile(tile, layer).then((data) => {
      const filepath = path.join(__dirname, "test", "in", `${z}-${x}-${y}.${layer}.pbf`);
      fs.writeFileSync(filepath, data);
    });
  });
}

const pbf: any = sharedstreetsPbf;
layers.forEach((layer) => {
  test("sharedstreets-pbf -- " + layer, (t) => {
    const filepath = path.join(__dirname, "test", "in", `${z}-${x}-${y}.${layer}.pbf`);
    const fileout = path.join(__dirname, "test", "out", `${z}-${x}-${y}.${layer}.json`);
    const {name, base} = path.parse(filepath);
    const buffer = fs.readFileSync(filepath);
    const result = pbf[layer](buffer);

    // Save Result
    // Set Environment Variable `export REGEN=true` to regenerate
    const outfile = filepath.replace(path.join("test", "in", base), path.join("test", "out", name + ".json"));
    if (process.env.REGEN) { write.sync(outfile, result); }
    t.deepEqual(result, load.sync(outfile), name);
    t.end();
  });
});
