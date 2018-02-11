import * as fs from "fs";
import * as glob from "glob";
import load from "load-json-file";
import * as path from "path";
import test from "tape";
import write from "write-json-file";
import * as sharedstreetsPbf from "./index";

const pbf: any = sharedstreetsPbf;
const types = ["geometry", "intersection", "reference", "metadata"];
types.forEach((type) => {
  test("sharedstreets-pbf -- " + type, (t) => {
    glob.sync(path.join(__dirname, "test", "in", `*.${type}.pbf`)).forEach((filepath) => {
      const {name, base} = path.parse(filepath);
      const buffer = fs.readFileSync(filepath);
      const result = pbf[type](buffer);

      const outfile = filepath.replace(path.join("test", "in", base), path.join("test", "out", name + ".json"));
      if (process.env.REGEN) { write.sync(outfile, result); }
      t.deepEqual(result, load.sync(outfile), name);
    });
    t.end();
  });
});
