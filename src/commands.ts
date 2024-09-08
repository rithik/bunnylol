export type CommandType = {
    name: string,
    url: string,
    searchurl?: string,
};

export type CommandNames = 'gmail' | 'gdrive' | 'ghs' | 'gcal' | 'wiki' | 'g' | 'DEFAULT';

export type CommandDataTableType = {
    name: string,
    url: string,
    command: CommandNames
};

export type ColumnDataTableType = {
    data: string,
    title: string
};

export const COMMANDS: Record<CommandNames, CommandType> = {
    gmail: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/"
    },
    gdrive: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
    },
    ghs: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://www.github.com/search?q="
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    },
    gcal: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/r"
    },
    wiki: {
        name: "Wikipedia",
        url: "https://en.wikipedia.org",
        searchurl: "https://en.wikipedia.org/wiki/"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
