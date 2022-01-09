import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import chalk from "chalk";
import boxen from "boxen";
import capitalize from "lodash.capitalize";

// Text to store in the file
const getRouteText = () => `import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.send('request successfull');
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
`;

const genRoute = (name) => {
  // Creating Directory Path
  let currPath = path.join(process.cwd(), "src/routes");
  if (!fs.existsSync(currPath)) {
    fs.mkdirSync(currPath, { recursive: true });
  }

  const routeText = getRouteText(name);

  fs.writeFileSync(path.join(currPath, `${name.toLowerCase()}.js`), routeText);
  console.log("route created!");
};

export default genRoute;
