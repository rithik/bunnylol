import type { CommandNames, CommandType } from "./commands.js";

import { COMMANDS } from "./commands.js";
import { viewHelpPage } from "./help.js";

const redirect: (url: string) => Promise<void> = async function (url: string) {
  await window.location.replace(url);
};

const bunnylol: (url: string) => Promise<boolean> = async function (
  currCmd: string
) {
  let arr: Array<string> = [];
  if (currCmd.startsWith("$")) {
    arr = currCmd.split(/[ $+]/g);
    arr[0] = "$";
    if (arr[1] === "") {
      arr = ["$"];
    }
  } else {
    arr = currCmd.split(/[ +]/g);
  }
  if (arr.length > 0) {
    const prefix: string = arr[0].endsWith(".")
      ? arr[0].substring(0, arr[0].length - 1).toLowerCase()
      : arr[0].toLowerCase();
    if (prefix in COMMANDS) {
      const commandName: CommandNames = prefix as CommandNames
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const command: CommandType = COMMANDS[commandName];
      const protocol: string = new URL(command.url).protocol;
      if (protocol !== "https:" && protocol !== "http:") {
        viewHelpPage();
      }
      if (command.searchurl && arr.length !== 1) {
        const searchParam = prefix !== "$" ? prefix.length + 1 : prefix.length;
        await redirect(
          `${command.searchurl}${encodeURIComponent(
            currCmd.substr(searchParam)
          )}`
        );
        return true;
      } else {
        await redirect(command.url);
        return true;
      }
    }
  }
  return false;
};

const currCmd: string =
  new URL(window.location.href).searchParams.get("search") ?? "help";

switch (currCmd) {
  case "help" || "":
    viewHelpPage();
    break;
  default:
    bunnylol(currCmd)
      .then((done: boolean) => {
        if (!done && COMMANDS.DEFAULT.searchurl) {
          redirect(
            `${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`
          );
        }
      })
      .catch((reject: string) => {
        console.log(reject);
      });
    break;
}
