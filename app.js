function bunnylol(){
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

    const fbCmd = cmd(currCmd, "fb", "https://facebook.com/", "https://www.facebook.com/search/top/?q=", false);
    const gmailCmd = cmd(currCmd, "gm", "https://mail.google.com/mail/u/0", "https://mail.google.com/mail/u/", false);
    const sisCmd = cmd(currCmd, "sis", "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main", "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main", false);
    const collabCmd = cmd(currCmd, "col", "https://collab.its.virginia.edu/portal", "https://collab.its.virginia.edu/portal", false);
    const youtubeCmd = cmd(currCmd, "yt", "https://youtube.com/", "https://www.youtube.com/results?q=", false);
    const ghCmd = cmd(currCmd, "gh", "https://github.com/", "https://www.youtube.com/results?q=", false);
    const redditCmd = cmd(currCmd, "r", "https://reddit.com/", "https://www.reddit.com/search?q=", false);
    const googleCmd = cmd(currCmd, "g", "https://google.com/", "https://www.google.com/search?q=", true);
}


function cmd(currCmd, cmdName, cmdMainURL, cmdSearchURL, force){
    if (currCmd === cmdName){
        window.location.replace(cmdMainURL);
    }
    if(currCmd.startsWith(`${cmdName + " "}`) || currCmd.startsWith(`${cmdName + "+"}`)){
        const query = currCmd.substring(cmdName.length + 1);
        window.location.replace(`${cmdSearchURL + query}`);
    }
    if (force){
        window.location.replace(`${cmdSearchURL + currCmd}`);
    }
}

bunnylol();