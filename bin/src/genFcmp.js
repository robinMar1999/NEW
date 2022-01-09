import fs from "fs";
import path from "path";
import capitalize from "lodash.capitalize";

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
  console.log("component created!");
};

export default genFcmp;
