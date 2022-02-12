import { program } from "commander";
import fse from "fs-extra";
import path from "path";

export const environmentArgsReader = () => {
  const pckgJson = fse.readJsonSync(path.join("./package.json"));

  program
    .version(pckgJson.version)
    .description(pckgJson.description)
    .option("--cli", "Provide the configuration using an interactive CLI instead of manually entering the arguments.")
    .option(
      "--path <path>",
      "Path to the root folder containing the root folder containing the .feature files (or subfolders with the files)."
    )
    .option(
      "--access-token <accessToken>",
      "Cucumber Studio's Access Token to call the API."
    )
    .option(
      "--client-id <clientId>",
      "Cucumber Studio's Client ID to call the API."
    )
    .option("--uid <UID>", "Cucumber Studio's UID to call the API.")
    .option(
      "--project-id <ids>",
      "Comma-separated IDs of the Project from which the program should synchronize the scenarios (no blank spaces).",
      []
    )
    .parse();

  /* istanbul ignore next */
  program.on("--help", () => {
    console.log(
      "For more details please visit https://github.com/carlosbermejop/cucumber-feature-sync-node#readme\n"
    );
  });

  return program.opts();
};
