// @flow

// This doesn't work as well as I had initially thought. The data here doesn't refresh throughout the day. For now, we'll redirect to Robinhood instead.

type Tickers = 'FB' | 'BA' | 'GOOG' | 'AAPL' | 'AMZN';

export const viewStockChart: Tickers => Promise<void> = async function(ticker: Tickers){
    const parentElement: ?HTMLElement = document.getElementById("stocks");

    if (!parentElement){
        return;
    }
    
    const rawData: Response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=QG78LZYMOC7TNLRR`);
    const jsonData = await rawData.json();
    const dataPoints = jsonData["Time Series (5min)"];
    
    if (jsonData.Note){
        parentElement.appendChild(document.createTextNode(`${jsonData.Note}`));
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
        return;
    }

    const timestamps: Array<string> = Object.keys(dataPoints);
    const prices: Array<string> = timestamps.map(ts => {
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
    parentElement.appendChild(element);

    // $FlowFixMe - Plotly will be loaded already
    Plotly.newPlot(chartElement, data);  
}

const viewStockDashboard: () => Promise<void> = async function(){
    viewStockChart("BA");
    viewStockChart("FB");
    viewStockChart("GOOG");
    viewStockChart("AAPL");
    viewStockChart("AMZN");
}
