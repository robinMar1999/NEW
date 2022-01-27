#!/usr/bin/env node

import { Command } from "commander";

import genModel from "./src/genModel.js";
import genRoute from "./src/genRoute.js";
import genCmp from "./src/genCmp.js";
import genPage from "./src/genPage.js";

const program = new Command();

program.version("1.0.0");

program
  .command("model <model_name>")
  .description("generate MongoDB model for Node.Js app")
  .action((model_name) => {
    genModel(model_name);
  })
  .addHelpText(
    "after",
    `
Examples:
  $ new model model_name`
  );

program
  .command("route <route_name>")
  .description("generate route for Node.Js app")
  .action((route_name) => {
    genRoute(route_name);
  })
  .addHelpText(
    "after",
    `
Examples:
  $ new route route_name`
  );

program
  .command("comp <comp_name> [additionalPath]")
  .description("generate function component for React app")
  .action((cmp_name, additionalPath) => {
    genCmp(cmp_name, additionalPath);
  })
  .addHelpText(
    "after",
    `
Examples:
  $ new comp component_name`
  );

program
  .command("page <comp_name> [additionalPath]")
  .description("generate page component for React app")
  .action((cmp_name, additionalPath) => {
    genPage(cmp_name, additionalPath);
  })
  .addHelpText(
    "after",
    `
Examples:
  $ new page component_name`
  );

program.parse();
