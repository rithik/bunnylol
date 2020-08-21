const COMMANDS = {
  fb: {
    "name": "Facebook",
    "URL": "https://facebook.com/",
    "searchURL": "https://www.facebook.com/search/top/?q="
  },
  gm: {
    "name": "Gmail",
    "URL": "https://mail.google.com/mail/u/0",
    "searchURL": "https://mail.google.com/mail/u/"
  },
  sis: {
    "name": "UVA SIS",
    "URL": "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main",
    "searchURL": "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main"
  },
  col: {
    "name": "UVA Collab",
    "URL": "https://collab.its.virginia.edu/portal",
    "searchURL": "https://collab.its.virginia.edu/portal"
  },
  yt: {
    "name": "YouTube",
    "URL": "https://youtube.com/",
    "searchURL": "https://www.youtube.com/results?search_query="
  },
  gh: {
    "name": "GitHub",
    "URL": "https://github.com/",
    "searchURL": "https://www.github.com/search?q="
  },
  r: {
    "name": "Reddit",
    "URL": "https://reddit.com/",
    "searchURL": "https://www.reddit.com/search?q="
  },
  db: {
    "name": "CS 4750: Database Systems",
    "URL": "http://www.cs.virginia.edu/~up3f/cs4750/schedule.html",
    "searchURL": "http://www.cs.virginia.edu/~up3f/cs4750/schedule.html"
  },
  cloud: {
    "name": "CS 4740: Cloud Computing",
    "URL": "https://nmagee.github.io/cs4740/schedule/",
    "searchURL": "https://nmagee.github.io/cs4740/schedule/"
  },
  priv: {
    "name": "CS 4501: Privacy in the Internet Age",
    "URL": "https://www.cs.virginia.edu/~ys3kz/courses/fall20/cs4501/",
    "searchURL": "https://www.cs.virginia.edu/~ys3kz/courses/fall20/cs4501/"
  },
  ml: {
    "name": "CS 4774: Machine Learning",
    "URL": "https://qiyanjun.github.io/2020f-UVA-CS-MachineLearningDeep/",
    "searchURL": "https://qiyanjun.github.io/2020f-UVA-CS-MachineLearningDeep/"
  },
  g: {
    "name": "Google",
    "URL": "https://google.com/",
    "searchURL": "https://www.google.com/search?q="
  },
  DEFAULT: {
    "name": "Google",
    "URL": "https://google.com/",
    "searchURL": "https://www.google.com/search?q="
  }
};

const bunnylol = async function (currCmd) {
  const arr = currCmd.split(/[ +]/g);

  if (arr.length > 0) {
    const prefix = arr[0].toLowerCase();

    if (prefix in COMMANDS) {
      const command = COMMANDS[prefix];

      if (arr.length === 1) {
        window.location.replace(command.URL);
        return true;
      } else {
        const [, ...query] = arr;
        window.location.replace(`${command.searchURL + query.join("+")}`);
        return true;
      }
    }
  }

  return false;
};

const searchParam = function (url) {
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

const currCmd = searchParam(window.location.href);
bunnylol(currCmd).then(done => {
  if (!done) {
    window.location.replace(`${COMMANDS.DEFAULT.searchURL}${currCmd}`);
  }
}).catch(reject => {
  console.log(reject);
});