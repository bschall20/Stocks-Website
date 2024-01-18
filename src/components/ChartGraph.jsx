// REFERENCE: https://apexcharts.com/docs/creating-first-javascript-chart/#
import React from "react";
import Chart from "react-apexcharts";
import dayjs from "dayjs";

function StockChart(props) {

  let height = 600;
  let width = 1200;

  if (window.matchMedia("(max-width: 625px)").matches) {
    height = 450
    width = 350
  }

  else if (window.matchMedia("(max-width: 850px)").matches) {
    height = 500
    width = 600
  }
  else if (window.matchMedia("(max-width: 1300px)").matches) {
    height = 600
    width = 800
  }
  else if (window.matchMedia("(max-width: 1500px)").matches) {
    width = 1000
  }

  let state = {
    series: [{
      data: props.data,
    }],
    options: {
      chart: {
        type: 'candlestick',
        height: 600
      },
      title: {
        style: {
          color: '#000000'
        },
        text: `${props.symbol} ${props.timeframe} Chart`,
        align: 'left'
      },
      xaxis: {
        type: 'category',
        labels: {
          style: {
            colors: '#000000'
          },
          rotate: -45,
          formatter: function (val) {
            return dayjs(val).format('ddd DD, MMM, YYYY HH:mm')
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#000000'
          }
        },
        tooltip: {
          enabled: true
        }
      },
      animations: {               // Keep this section??? See: https://github.com/apexcharts/apexcharts.js/issues/214
        enabled: false
      },
    }
  }
  return (
    <div id="chart">
      <Chart options={state.options} series={state.series} type="candlestick" height={height} width={width} />
    </div>);
}

export default StockChart;

