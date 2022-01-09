import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import chalk from "chalk";
import boxen from "boxen";
import capitalize from "lodash.capitalize";

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
  console.log("model created!");
};

export default genModel;
