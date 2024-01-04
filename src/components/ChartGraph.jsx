// REFERENCE: https://apexcharts.com/docs/creating-first-javascript-chart/#
// import ApexCharts from 'apexcharts'
import React from "react";
import Chart from "react-apexcharts";
import dayjs from "dayjs";

function StockChart(props) {

   let state = {
    // Date - Open - High - Low - Close
      series: [{
        data: props.data,
      }],
      options: {
        chart: {
          type: 'candlestick',
          height: 600
        },
        title: {
          text: `${props.symbol} ${props.timeframe} Chart`,
          align: 'left'
        },
        // xaxis: {
        //   labels: {
        //     datetimeUTC: false,
        //     format: 'ddd dd, MMM, yyyy HH:mm'
        //   },
        //   type: 'datetime',
        // },
        xaxis: {
          type: 'category',
          labels: {
            rotate: -45,
            formatter: function(val) {
              // return dayjs(val).format('MMM DD HH:mm')
              return dayjs(val).format('ddd DD, MMM, YYYY HH:mm')
            }
          }
        },
        yaxis: {
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

