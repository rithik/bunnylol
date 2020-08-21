import { COMMANDS } from './commands';

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
    window.location.replace(`${COMMANDS.default.searchURL}${currCmd}`);
  }
}).catch(reject => {
  console.log(reject);
});