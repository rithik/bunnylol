import { COMMANDS } from './commands.js';
import { CLASSES } from './classes.js';
export const viewHelpPage = function () {
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
};