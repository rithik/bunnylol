// @flow 

import type {CommandNames, CommandDataTableType, ColumnDataTableType} from './commands.js';
import COMMANDS from './commands.js';

export default function(){
    const data: Array<CommandDataTableType> = Object.keys(COMMANDS).map((command: CommandNames) => {
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
    $('#help-table').DataTable({
        data: data,
        columns: columns,
        order: [[ 1, "asc" ]],
        paging: false
    });
}
