// @flow

type CommandType = {
    name: string, 
    url: string, 
    searchurl?: string,
};

type CommandNames = 'fb' | 'gm' | 'sis' | 'col' | 'yt' | 'gh' | 'r' | 'l' | 'me' | 'db' | 'cloud' | 'priv' | 'ml' | 'wp' | 'wsj' | 'cnn' | 'g' | 'DEFAULT';

type CommandDataTableType = {
    name: string, 
    url: string, 
    searchurl?: string,
    command: CommandNames
};

type AllCommandsType = { [CommandNames]: CommandType };

type ColumnDataTableType = {data: $Keys<CommandDataTableType>, title: string};

const COMMANDS: AllCommandsType = {
    fb: {
        name: "Facebook",
        url: "https://facebook.com/",
        searchurl: "https://www.facebook.com/search/top/?q="
    },
    gm: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/"
    },
    sis: {
        name: "UVA SIS",
        url: "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main",
    },
    col: {
        name: "UVA Collab",
        url: "https://collab.its.virginia.edu/portal",
    },
    yt: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    gh: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://www.github.com/search?q="
    },
    r: {
        name: "Reddit",
        url: "https://reddit.com/",
        searchurl: "https://www.reddit.com/search?q="
    },
    l: {
        name: "Linkedin",
        url: "https://linkedin.com/",
    },
    me: {
        name: "Rithik.me - Personal Website",
        url: "https://rithik.me/",
    },
    db: {
        name: "CS 4750: Database Systems",
        url: "http://www.cs.virginia.edu/~up3f/cs4750/schedule.html",
    },
    cloud: {
        name: "CS 4740: Cloud Computing",
        url: "https://nmagee.github.io/cs4740/schedule/",
    },
    priv: {
        name: "CS 4501: Privacy in the Internet Age",
        url: "https://www.cs.virginia.edu/~ys3kz/courses/fall20/cs4501/",
    },
    ml: {
        name: "CS 4774: Machine Learning",
        url: "https://qiyanjun.github.io/2020f-UVA-CS-MachineLearningDeep/",
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    },
    wp: {
        name: "Washington Post",
        url: "https://www.washingtonpost.com/regional/"
    },
    wsj: {
        name: "Wall Street Journal",
        url: "https://www.wsj.com/"
    },
    cnn: {
        name: "CNN",
        url: "https://www.cnn.com/"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};

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
