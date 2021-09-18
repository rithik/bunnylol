// @flow strict

import type {CommandNames, CommandDataTableType, ColumnDataTableType} from './commands.js';
import type {ClassCommands, JoinOrDiscussType, ClassType} from './classes.js';

import {COMMANDS} from './commands.js';
import {CLASSES} from './classes.js';

export const viewHelpPage: () => void = function(){
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

    const classesData: Array<CommandDataTableType> = Object.keys(CLASSES).map((command: ClassCommands) => {
        const cmdData = CLASSES[command];
        return {
            name: cmdData.name, 
            url: cmdData.url, 
            // $FlowFixMe - this is actually correct.
            command
        };
    });

    const classColumns: Array<ColumnDataTableType> = [
        {data: 'command', title: "Command"}, 
        {data: 'name', title: "Name"}, 
        {data: 'url', title: "URL"}, 
    ];
    // $FlowFixMe - jQuery import
    $('#classes-table').DataTable({
        data: classesData,
        columns: classColumns,
        order: [[ 1, "asc" ]],
        paging: false
    });
}
