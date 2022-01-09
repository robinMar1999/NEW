#!/usr/bin/env node

import { Command } from "commander";

import genModel from "./src/genModel.js";
import genRoute from "./src/genRoute.js";

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
  $ model -n model_name`
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
  $ route -n route_name`
  );

program
  .command("fcmp")
  .description("generate function component for React app")
  .requiredOption("-n, --name <component_name>", "component name")
  .action((options) => {
    console.log("component_name", options.name);
  })
  .addHelpText(
    "after",
    `
Examples:
  $ fcmp -n component_name`
  );

program.parse();
