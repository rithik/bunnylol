// @flow strict

export type CommandType = {|
    name: string, 
    url: string, 
    searchurl?: string,
|};

export type CommandNames = 'fb' | 'gm' | 'sis' | 'col' | 'yt' | 'gh' | 'r' | 'l' | 'me' | 'ig' | 'tw' | 'tr' |
                    'gd' | 'db' | 'cloud' | 'priv' | 'ml' | 'wp' | 'wsj' | 'cnn' | 'g' | 'DEFAULT';

export type CommandDataTableType = {|
    name: string, 
    url: string, 
    command: CommandNames
|};

export type ColumnDataTableType = {| 
    data: string, 
    title: string 
|};

export const COMMANDS: { [CommandNames]: CommandType } = {
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
    gd: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
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
    ig: {
        name: "Instagram",
        url: "https://instagram.com/",
        searchurl: "https://instagram.com/"
    },
    tw: {
        name: "Twitter",
        url: "https://twitter.com/",
        searchurl: "https://twitter.com/search?q="
    },
    me: {
        name: "Rithik.me - Personal Website",
        url: "https://rithik.me/me",
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
    tr: {
        name: "HooHacks Trello Board",
        url: "https://trello.com/b/GjKhtVPK/hoohacks"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
