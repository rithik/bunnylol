'use strict';const COMMANDS = {
  fb: {
    name: "Facebook",
    url: "https://facebook.com/",
    searchurl: "https://www.facebook.com/search/top/?q="
  },
  m: {
    name: "Messenger Desktop App",
    url: "messenger://"
  },
  mw: {
    name: "Messenger Web",
    url: "https://www.messenger.com/"
  },
  wa: {
    name: "WhatsApp Desktop App",
    url: "whatsapp://"
  },
  waw: {
    name: "WhatsApp Web",
    url: "https://web.whatsapp.com/"
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
    url: "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main"
  },
  col: {
    name: "UVA Collab",
    url: "https://collab.its.virginia.edu/portal"
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
    url: "https://linkedin.com/"
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
    url: "https://rithik.me/me"
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
  n: {
    name: "Netflix",
    url: "https://netflix.com/",
    searchurl: "https://www.netflix.com/search?q="
  },
  h: {
    name: "Hulu",
    url: "https://hulu.com/"
  },
  pv: {
    name: "Amazon Prime Video",
    url: "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
    searchurl: "https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k="
  },
  p: {
    name: "Piazza",
    url: "https://piazza.com/class"
  },
  vs: {
    name: "VS Code",
    url: "vscode://"
  },
  wf: {
    name: "Webflow",
    url: "https://webflow.com/design/hoohacks"
  },
  hs: {
    name: "Hubspot",
    url: "https://app.hubspot.com/live-messages/"
  },
  $: {
    name: "Robinhood",
    url: "https://robinhood.com/",
    searchurl: "https://robinhood.com/stocks/"
  },
  cal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/r"
  },
  covid: {
    name: "UVA COVID-19 Tracker",
    url: "https://returntogrounds.virginia.edu/covid-tracker"
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q="
  }
};// j = join; d = discussion; c = UVA Collab; default to url
const CLASSES = {
  priv: {
    name: "CS 4501: Privacy in the Internet Age",
    zoomurl: "https://virginia.zoom.us/j/96274680764?pwd=eXFBcFViZUVkMUJQQitobG5EQ3BXdz09",
    discussionurl: "https://piazza.com/class/ke81el8uw9o3ra",
    collaburl: "https://collab.its.virginia.edu/portal/site/bbaeb16c-6afb-4835-9b16-92378b639304",
    url: "https://www.cs.virginia.edu/~ys3kz/courses/fall20/cs4501/"
  },
  sts: {
    name: "STS 4500: STS and Engineering Practice",
    url: "https://collab.its.virginia.edu/portal/site/07e85646-fc70-487b-83e5-65728bf69fcc",
    zoomurl: "https://virginia.zoom.us/w/92179481987?tk=lb8hbvtc_d9jv-GZ7NDqcyaiY_bVRizjLvKvOCaq7Y4.DQIAAAAVdlNFgxZ0Q095dGdQbVJ3dU00a0d2bTRPOVN3AAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=bWJOdUN5eVUxMnlqOEd2RVJ0VmJkUT09"
  },
  startup: {
    name: "STS 2830: Startup Operations for Entrepreneurs",
    zoomurl: "https://virginia.zoom.us/j/98989659952?pwd=bk9DVE5TR1pZUzNubkk0elBBMDl6QT09",
    discussionurl: "https://piazza.com/class/ke8p78ntzjt3be",
    url: "https://collab.its.virginia.edu/portal/site/87a9eeb6-6e49-4631-bc47-8dbf649e5dd4"
  },
  mobile: {
    name: "CS 4720: Mobile App Development",
    url: "https://mobileappdev.teachable.com/courses"
  },
  ml: {
    name: "CS 4557: Machine Learning",
    zoomurl: "https://virginia.zoom.us/j/97039189577?pwd=WUpLYTVhVGt2LzNDemdmNUxINXNEUT09",
    discussionurl: "slack://2020fuvacsmac-93g9279",
    url: "https://qiyanjun.github.io/2020f-UVA-CS-MachineLearningDeep/",
    collaburl: "https://collab.its.virginia.edu/portal/site/708c9e27-aaab-4acc-ab33-ff493c83527b/"
  },
  db: {
    name: "CS 4750: Database Systems",
    url: "https://www.cs.virginia.edu/~up3f/cs4750/schedule.html",
    zoomurl: "https://virginia.zoom.us/j/92678230496?pwd=VVNqdHk3TVF0YndRNFFlbW9PR0pyZz09",
    discussionurl: "https://piazza.com/class/kdkzzs4q102d3",
    collaburl: "https://collab.its.virginia.edu/portal/site/27a3a9f2-00f9-45db-a2ed-6e99e9415ea1"
  },
  cloud: {
    name: "CS 4740: Cloud Computing",
    discussionurl: "discord://",
    url: "https://nmagee.github.io/cs4740/schedule/",
    collaburl: "https://collab.its.virginia.edu/portal/site/4721482a-fa9b-45af-a68c-ee47e0e0e89d"
  },
  bus: {
    name: "STS 4810: New Product Development",
    url: "https://collab.its.virginia.edu/portal/site/63ca844a-473b-4fd9-80e8-417943b0c335",
    zoomurl: "https://virginia.zoom.us/j/94123273294?pwd=cnVUaHdRN1B6NVMzOHhsZlhkNDBOdz09"
  }
};const viewHelpPage = function () {
  const data = Object.keys(COMMANDS).map(command => {
    const cmdData = COMMANDS[command];
    return {
      name: cmdData.name,
      url: cmdData.url,
      command: command
    };
  });
  const columns = [{
    data: 'command',
    title: "Command"
  }, {
    data: 'name',
    title: "Name"
  }, {
    data: 'url',
    title: "URL"
  }]; // $FlowFixMe - jQuery import

  $('#help-table').DataTable({
    data: data,
    columns: columns,
    order: [[1, "asc"]],
    paging: false
  });
  const classesData = Object.keys(CLASSES).map(command => {
    const cmdData = CLASSES[command];
    return {
      name: cmdData.name,
      url: cmdData.url,
      // $FlowFixMe - this is actually correct.
      command: command
    };
  });
  const classColumns = [{
    data: 'command',
    title: "Command"
  }, {
    data: 'name',
    title: "Name"
  }, {
    data: 'url',
    title: "URL"
  }]; // $FlowFixMe - jQuery import

  $('#classes-table').DataTable({
    data: classesData,
    columns: classColumns,
    order: [[1, "asc"]],
    paging: false
  });
};const redirect = async function (url) {
  await window.location.replace(url);
};

const bunnylol = async function (currCmd) {
  const arr = currCmd.split(/[ +]/g);

  if (arr.length > 0) {
    const prefix = arr[0].toLowerCase();

    if (prefix in CLASSES) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const classData = CLASSES[prefix];

      if (arr.length > 1) {
        if (arr[1].toLowerCase() === "j" && classData.zoomurl) {
          await redirect(`${classData.zoomurl}`);
          return true;
        } else if (arr[1].toLowerCase() === "d" && classData.discussionurl) {
          await redirect(`${classData.discussionurl}`);
          return true;
        } else if (arr[1].toLowerCase() === "c" && classData.collaburl) {
          await redirect(`${classData.collaburl}`);
          return true;
        }
      }

      await redirect(`${classData.url}`);
      return true;
    }

    if (prefix in COMMANDS) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const command = COMMANDS[prefix];
      const protocol = new URL(command.url).protocol;

      if (protocol !== "https:" && protocol !== "http:") {
        viewHelpPage();
      }

      if (command.searchurl && arr.length !== 1) {
        const [, ...query] = arr;
        await redirect(`${command.searchurl + query.join("+")}`);
        return true;
      } else {
        await redirect(command.url);
        return true;
      }
    }
  }

  return false;
};

const currCmd = new URL(window.location.href).searchParams.get("search") ?? "help";

switch (currCmd) {
  case "help" :
    viewHelpPage();
    break;

  default:
    bunnylol(currCmd).then(done => {
      if (!done && COMMANDS.DEFAULT.searchurl) {
        redirect(`${COMMANDS.DEFAULT.searchurl}${currCmd}`);
      }
    }).catch(reject => {
      console.log(reject);
    });
    break;
}