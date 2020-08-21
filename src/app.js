// @flow

export type CommandType = {
    name: string, 
    url: string, 
    searchurl?: string,
};

type AllCommandsType = {|
    fb: CommandType, 
    gm: CommandType, 
    sis: CommandType, 
    col: CommandType, 
    yt: CommandType, 
    gh: CommandType,
    r: CommandType,
    db: CommandType, 
    cloud: CommandType,
    priv: CommandType, 
    ml: CommandType, 
    wp: CommandType, 
    wsj: CommandType,
    cnn: CommandType, 
    g: CommandType, 
    DEFAULT: CommandType
|};

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
    if (!done && COMMANDS.DEFAULT.searchurl){
        window.location.replace(`${COMMANDS.DEFAULT.searchurl}${currCmd}`);
    }
}).catch(reject => {console.log(reject);});
