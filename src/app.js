// @flow

import type {CommandType} from './commands';

import {COMMANDS} from './commands';

const bunnylol: string => Promise<boolean> = async function (currCmd: string){
    const arr: Array<string> = currCmd.split(/[ +]/g);
    if (arr.length > 0){
        const prefix: string = arr[0].toLowerCase();
        if (prefix in COMMANDS){
            const command: CommandType = COMMANDS[prefix];
            if (arr.length === 1){
                window.location.replace(command.URL);
                return true;
            }
            else{
                const [, ...query] = arr;
                window.location.replace(`${command.searchURL + query.join("+")}`);
                return true;
            }
        }
    }
    return false;
}

const searchParam: string => string = function (url: string) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params.search;
};

const currCmd: string = searchParam(window.location.href);

bunnylol(currCmd).then((done: boolean) => {
    if (!done){
        window.location.replace(`${COMMANDS.DEFAULT.searchURL}${currCmd}`);
    }
}).catch(reject => {console.log(reject);});
