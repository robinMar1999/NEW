import boxen from "boxen";

const outputMsg = (text) => {
  const boxenOptions = {
    padding: 0.8,
    borderStyle: "round",
    borderColor: "blue",
    // backgroundColor: "#555555",
  };
  // const text =
  //   chalk.green.bold(name) +
  //   chalk.white.bold(` created at `) +
  //   chalk.bold.yellow(currPath);

  const msgBox = boxen(text, boxenOptions);
  console.log(msgBox);
};

export default outputMsg;
