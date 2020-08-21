import { COMMANDS } from './commands.js';

const bunnylol = async function (currCmd) {
  const arr = currCmd.split(/[ +]/g);

  if (arr.length > 0) {
    const prefix = arr[0].toLowerCase();

    if (prefix in COMMANDS) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const command = COMMANDS[prefix];

      if (command.searchurl && arr.length !== 1) {
        const [, ...query] = arr;
        window.location.replace(`${command.searchurl + query.join("+")}`);
        return true;
      } else {
        window.location.replace(command.url);
        return true;
      }
    }
  }

  return false;
};

const currCmd = new URL(window.location.href).searchParams.get("search") ?? "help";

if (currCmd === "help" || currCmd.length === 0) {
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

  $(document).ready(function () {
    $('#help-table').DataTable({
      data: data,
      columns: columns,
      order: [[1, "asc"]],
      paging: false
    });
  });
} else {
  bunnylol(currCmd).then(done => {
    if (!done && COMMANDS.DEFAULT.searchurl) {
      window.location.replace(`${COMMANDS.DEFAULT.searchurl}${currCmd}`);
    }
  }).catch(reject => {
    console.log(reject);
  });
}