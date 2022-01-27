import fs from "fs";
import path from "path";
import chalk from "chalk";

import outputMsg from "../utils/outputMsg.js";

// Text to store in the file
const getCmpText = (name) => `import React from 'react';
import classes from "./${name}.module.css";
const ${name} = props => {
  return (
    <div className={classes.${name}}>
      ${name}
    </div>
  )
}
export default ${name}
`;

const genFcmp = (name, additionalPath) => {
  // Creating Directory Path
  let currPath = path.join(process.cwd(), "src/pages");
  if (additionalPath) {
    currPath = path.join(currPath, additionalPath);
  }
  currPath = path.join(currPath, name);
  if (!fs.existsSync(currPath)) {
    fs.mkdirSync(currPath, { recursive: true });
  }

  const cmpText = getCmpText(name);
  const cssText = `.${name}{
  
}`;

  fs.writeFileSync(path.join(currPath, `${name}.js`), cmpText);
  fs.writeFileSync(path.join(currPath, `${name}.module.css`), cssText);
  const text = `${
    chalk.bold.yellow(path.join(currPath, chalk.green(name + ".js"))) +
    chalk.white.bold(" created.")
  }
${
  chalk.bold.yellow(path.join(currPath, chalk.green(name + ".module.css"))) +
  chalk.white.bold(" created.")
}`;
  outputMsg(text);
};

export default genFcmp;
