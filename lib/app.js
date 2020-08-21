import { COMMANDS } from './commands.js';

const redirect = async function (url) {
  await window.location.replace(url);
};

const bunnylol = async function (currCmd) {
  const arr = currCmd.split(/[ +]/g);

  if (arr.length > 0) {
    const prefix = arr[0].toLowerCase();

    if (prefix in COMMANDS) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const command = COMMANDS[prefix];

      if (command.searchurl && arr.length !== 1) {
        const [, ...query] = arr;
        await redirect(`${command.searchurl + query.join("+")}`);
      } else {
        await redirect(command.url);
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

  $('#help-table').DataTable({
    data: data,
    columns: columns,
    order: [[1, "asc"]],
    paging: false
  });
} else {
  bunnylol(currCmd).then(done => {
    if (!done && COMMANDS.DEFAULT.searchurl) {
      redirect(`${COMMANDS.DEFAULT.searchurl}${currCmd}`);
    }
  }).catch(reject => {
    console.log(reject);
  });
}