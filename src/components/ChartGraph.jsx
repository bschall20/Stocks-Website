// REFERENCE: https://apexcharts.com/docs/creating-first-javascript-chart/#
// import ApexCharts from 'apexcharts'
import React from "react";
import Chart from "react-apexcharts";
import dayjs from "dayjs";

function StockChart(props) {

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
      <Chart options={state.options} series={state.series} type="candlestick" height={600} width={1200} />
    </div>);
}

export default StockChart;

