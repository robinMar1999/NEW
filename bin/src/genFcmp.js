import fs from "fs";
import path from "path";
import capitalize from "lodash.capitalize";
import chalk from "chalk";

import outputMsg from "../utils/outputMsg.js";

// Text to store in the file
const getCmpText = (name) => `import React from 'react';
const ${name} = () => {
  return (
    <div className={classes.${name}}>
      
    </div>
  )
}
export default ${name}
`;

const genFcmp = (name, additionalPath) => {
  // Creating Directory Path
  let currPath = path.join(process.cwd(), "src/components");
  if (additionalPath) {
    currPath = path.join(currPath, additionalPath);
  }
  currPath = path.join(currPath, capitalize(name));
  if (!fs.existsSync(currPath)) {
    fs.mkdirSync(currPath, { recursive: true });
  }

  const cmpText = getCmpText(capitalize(name));
  const cssText = `.${capitalize(name)}{
  
}`;

  fs.writeFileSync(path.join(currPath, `${capitalize(name)}.js`), cmpText);
  fs.writeFileSync(
    path.join(currPath, `${capitalize(name)}.module.css`),
    cssText
  );
  const cname = capitalize(name);
  const text = `${
    chalk.bold.yellow(path.join(currPath, chalk.green(cname + ".js"))) +
    chalk.white.bold(" created.")
  }
${
  chalk.bold.yellow(path.join(currPath, chalk.green(cname + ".module.css"))) +
  chalk.white.bold(" created.")
}`;
  outputMsg(text);
};

export default genFcmp;
