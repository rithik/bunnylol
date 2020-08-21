// @flow

import type {CommandType, CommandNames, CommandDataTableType, AllCommandsType, ColumnDataTableType} from './commands.js';
import {COMMANDS} from './commands.js';

const bunnylol: string => Promise<boolean> = async function (currCmd: string){
    const arr: Array<string> = currCmd.split(/[ +]/g);
    if (arr.length > 0){
        const prefix: string = arr[0].toLowerCase();
        if (prefix in COMMANDS){
            // $FlowFixMe - this is actually correct since the prefix is a key.
            const command: CommandType = COMMANDS[prefix];
            if (command.searchurl && arr.length !== 1){
                const [, ...query] = arr;
                window.location.replace(`${command.searchurl + query.join("+")}`);
                return true;
            }
            else {
                window.location.replace(command.url);
                return true;
            }
        }
    }
    return false;
}

const currCmd: string = new URL(window.location.href).searchParams.get("search") ?? "help";

if (currCmd === "help" || currCmd.length === 0){
    const data: Array<CommandDataTableType> = Object.keys(COMMANDS).map(command => {
        const cmdData = COMMANDS[command];
        return {
            name: cmdData.name, 
            url: cmdData.url, 
            command: command
        };
    });
    const columns: Array<ColumnDataTableType> = [
        {data: 'command', title: "Command"}, 
        {data: 'name', title: "Name"}, 
        {data: 'url', title: "URL"}, 
    ];
    // $FlowFixMe - jQuery import
    $(document).ready( function () {
        $('#help-table').DataTable({
            data: data,
            columns: columns,
            order: [[ 1, "asc" ]],
            paging: false
        });
    });
}
else{
    bunnylol(currCmd).then((done: boolean) => {
        if (!done && COMMANDS.DEFAULT.searchurl){
            window.location.replace(`${COMMANDS.DEFAULT.searchurl}${currCmd}`);
        }
    }).catch(reject => {console.log(reject);});
}
