async function bunnylol(currCmd){
    const fbCmd = cmd(currCmd, "fb", "https://facebook.com/", "https://www.facebook.com/search/top/?q=");
    const gmailCmd = cmd(currCmd, "gm", "https://mail.google.com/mail/u/0", "https://mail.google.com/mail/u/");
    const sisCmd = cmd(currCmd, "sis", "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main", "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main");
    const collabCmd = cmd(currCmd, "col", "https://collab.its.virginia.edu/portal", "https://collab.its.virginia.edu/portal");
    const youtubeCmd = cmd(currCmd, "yt", "https://youtube.com/", "https://www.youtube.com/results?q=");
    const ghCmd = cmd(currCmd, "gh", "https://github.com/", "https://www.github.com/search?q=");
    const redditCmd = cmd(currCmd, "r", "https://reddit.com/", "https://www.reddit.com/search?q=");

    const dbCmd = cmd(currCmd, "db", "http://www.cs.virginia.edu/~up3f/cs4750/schedule.html", "http://www.cs.virginia.edu/~up3f/cs4750/schedule.html");
    const cloudCmd = cmd(currCmd, "cloud", "https://nmagee.github.io/cs4740/schedule/", "https://nmagee.github.io/cs4740/schedule/");
    const privCmd = cmd(currCmd, "priv", "https://www.cs.virginia.edu/~ys3kz/courses/fall20/cs4501/", "https://www.cs.virginia.edu/~ys3kz/courses/fall20/cs4501/");
    const mlCmd = cmd(currCmd, "ml", "https://qiyanjun.github.io/2020f-UVA-CS-MachineLearningDeep/", "https://qiyanjun.github.io/2020f-UVA-CS-MachineLearningDeep/");

    const googleCmd = cmd(currCmd, "g", "https://google.com/", "https://www.google.com/search?q=");

    return fbCmd || gmailCmd || sisCmd || collabCmd || youtubeCmd || ghCmd || redditCmd || dbCmd || cloudCmd || privCmd || mlCmd || googleCmd;
}


function cmd(currCmd, cmdName, cmdMainURL, cmdSearchURL){
    if (currCmd === cmdName){
        window.location.replace(cmdMainURL);
        return true;
    }
    if(currCmd.startsWith(`${cmdName + " "}`) || currCmd.startsWith(`${cmdName + "+"}`)){
        const query = currCmd.substring(cmdName.length + 1);
        window.location.replace(`${cmdSearchURL + query}`);
        return true;
    }
    return false;
}

const searchParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

const currCmd = searchParams(window.location.href).search;

bunnylol(currCmd).then((done) => {
    if (!done){
        window.location.replace(`https://www.google.com/search?q=${currCmd}`);
    }
});


