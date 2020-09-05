// This doesn't work as well as I had initially thought. The data here doesn't refresh throughout the day. For now, we'll redirect to Robinhood instead.
export const viewStockChart = async function (ticker) {
  const parentElement = document.getElementById("stocks");

  if (!parentElement) {
    return;
  }

  const rawData = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=QG78LZYMOC7TNLRR`);
  const jsonData = await rawData.json();
  const dataPoints = jsonData["Time Series (5min)"];

  if (jsonData.Note) {
    parentElement.appendChild(document.createTextNode(`${jsonData.Note}`));
    parentElement.appendChild(document.createElement("br"));
    parentElement.appendChild(document.createElement("br"));
    return;
  }

  const timestamps = Object.keys(dataPoints);
  const prices = timestamps.map(ts => {
    return dataPoints[ts]["4. close"];
  });
  var data = [{
    x: timestamps,
    y: prices,
    type: 'scatter'
  }];
  const element = document.createElement("div");
  element.id = `${ticker}-parent`;
  element.appendChild(document.createTextNode(`${ticker}`));
  const chartElement = document.createElement("div");
  chartElement.id = `${ticker}-chart`;
  element.appendChild(chartElement);
  parentElement.appendChild(element); // $FlowFixMe - Plotly will be loaded already

  Plotly.newPlot(chartElement, data);
};

const viewStockDashboard = async function () {
  viewStockChart("BA");
  viewStockChart("FB");
  viewStockChart("GOOG");
  viewStockChart("AAPL");
  viewStockChart("AMZN");
};