export const CLASSES = {
  priv: {
    name: "CS 4501: Privacy in the Internet Age",
    url: "https://virginia.zoom.us/j/96274680764?pwd=eXFBcFViZUVkMUJQQitobG5EQ3BXdz09",
    discussionurl: "https://piazza.com/class/ke81el8uw9o3ra"
  },
  sts: {
    name: "STS 4500: STS and Engineering Practice",
    url: "https://virginia.zoom.us/w/92179481987?tk=lb8hbvtc_d9jv-GZ7NDqcyaiY_bVRizjLvKvOCaq7Y4.DQIAAAAVdlNFgxZ0Q095dGdQbVJ3dU00a0d2bTRPOVN3AAAAAAAAAAAAAAAAAAAAAAAAAAAA&pwd=bWJOdUN5eVUxMnlqOEd2RVJ0VmJkUT09"
  },
  startup: {
    name: "STS 2830: Startup Operations for Entrepreneurs",
    url: "https://virginia.zoom.us/j/98989659952?pwd=bk9DVE5TR1pZUzNubkk0elBBMDl6QT09",
    discussionurl: "https://piazza.com/class/ke8p78ntzjt3be"
  },
  ml: {
    name: "CS 4557: Machine Learning",
    url: "https://virginia.zoom.us/j/97039189577?pwd=WUpLYTVhVGt2LzNDemdmNUxINXNEUT09",
    discussionurl: "slack://2020fuvacsmac-93g9279"
  },
  db: {
    name: "CS 4750: Database Systems",
    url: "https://virginia.zoom.us/j/92678230496?pwd=VVNqdHk3TVF0YndRNFFlbW9PR0pyZz09",
    discussionurl: "https://piazza.com/class/kdkzzs4q102d3"
  },
  cloud: {
    name: "CS 4720: Cloud Computing",
    discussionurl: "discord://"
  }
};
export const nextClass = function (classCmd, cmd) {
  return cmd === "d" ? CLASSES[classCmd].discussionurl : CLASSES[classCmd].url;
};