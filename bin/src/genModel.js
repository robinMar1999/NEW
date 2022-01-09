import fs from "fs";
import path from "path";
import chalk from "chalk";
import capitalize from "lodash.capitalize";

import outputMsg from "../utils/outputMsg.js";

// Text to store in the file
const getModelText = (name) => `import { model } from "mongoose";
import { Schema } from "mongoose";

const ${name.toLowerCase()}Schema = new Schema({

});

export default ${capitalize(
  name.toLowerCase()
)} = model("${name.toLowerCase()}", ${name.toLowerCase()}Schema);
`;

const genModel = (name) => {
  // Creating Directory Path
  let currPath = path.join(process.cwd(), "src/models");
  if (!fs.existsSync(currPath)) {
    fs.mkdirSync(currPath, { recursive: true });
  }

  const modelText = getModelText(name);

  fs.writeFileSync(path.join(currPath, `${name.toLowerCase()}.js`), modelText);
  const text = `${
    chalk.bold.yellow(
      path.join(currPath, chalk.green(name.toLowerCase() + ".js"))
    ) + chalk.white.bold(" created.")
  }`;
  outputMsg(text);
};

export default genModel;
