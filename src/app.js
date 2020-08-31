// @flow strict

import type {CommandType} from './commands.js';
import type {ClassCommands, JoinOrDiscussType} from './calendar.js';

import COMMANDS from './commands.js';
import viewStockDashboard from './stocks.js';
import viewHelpPage from './help.js';
import {CLASSES, nextClass} from './calendar.js';

const redirect: string => Promise<void> = async function(url: string){
    await window.location.replace(url);
}

const bunnylol: string => Promise<boolean> = async function (currCmd: string){
    const arr: Array<string> = currCmd.split(/[ +]/g);
    if (arr.length > 0){
        const prefix: string = arr[0].toLowerCase();
        if (prefix in COMMANDS){
            // $FlowFixMe - this is actually correct since the prefix is a key.
            const command: CommandType = COMMANDS[prefix];
            const protocol: string = new URL(command.url).protocol;
            if (prefix in CLASSES){
                // $FlowFixMe - this is actually correct since the prefix is a key.
                const classData = CLASSES[prefix]; 
                if (arr.length > 1){
                    if (arr[1].toLowerCase() === "j" && classData.url){
                        await redirect(`${classData.url}`);
                        return true;
                    }
                    if (arr[1].toLowerCase() === "d" && classData.discussionurl){
                        await redirect(`${classData.discussionurl}`);
                        return true;
                    }
                }
            }
            if(protocol !== "https:" && protocol !== "http:"){
                viewHelpPage();
            }
            if (command.searchurl && arr.length !== 1){
                const [, ...query] = arr;
                await redirect(`${command.searchurl + query.join("+")}`);
                return true;
            }
            else {
                await redirect(command.url);
                return true;
            }
        }
    }
    return false;
}

const currCmd: string = new URL(window.location.href).searchParams.get("search") ?? "help";

switch(currCmd){
    case "help" || "": 
        viewHelpPage();
        break;
    default: 
        bunnylol(currCmd).then((done: boolean) => {
            if (!done && COMMANDS.DEFAULT.searchurl){
                redirect(`${COMMANDS.DEFAULT.searchurl}${currCmd}`);
            }
        }).catch((reject: string) => {console.log(reject);});
        break;
}
