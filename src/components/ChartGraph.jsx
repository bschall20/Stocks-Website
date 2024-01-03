// REFERENCE: https://apexcharts.com/docs/creating-first-javascript-chart/#
// import ApexCharts from 'apexcharts'
import React, { Component } from "react";
import Chart from "react-apexcharts";



// class StockChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//         }
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50, 49, 60, 70, 91]
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <div className="app">
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="800"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default StockChart;


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// class StockChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//       series: [{
//         data: [{
//           x: new Date(1538778600000),
//           y: [6629.81, 6650.5, 6623.04, 6633.33]
//         },
//         {
//           x: new Date(1538780400000),
//           y: [6632.01, 6643.59, 6620, 6630.11]
//         },
//         {
//           x: new Date(1538782200000),
//           y: [6630.71, 6648.95, 6623.34, 6635.65]
//         },
//         {
//           x: new Date(1538784000000),
//           y: [6635.65, 6651, 6629.67, 6638.24]
//         },
//         {
//           x: new Date(1538785800000),
//           y: [6638.24, 6640, 6620, 6624.47]
//         },
//         {
//           x: new Date(1538787600000),
//           y: [6624.53, 6636.03, 6621.68, 6624.31]
//         },
//         {
//           x: new Date(1538789400000),
//           y: [6624.61, 6632.2, 6617, 6626.02]
//         },
//         {
//           x: new Date(1538791200000),
//           y: [6627, 6627.62, 6584.22, 6603.02]
//         }
//         ]
//       }],
//       options: {
//         chart: {
//           type: 'candlestick',
//           height: 350
//         },
//         title: {
//           text: 'CandleStick Chart',
//           align: 'left'
//         },
//         xaxis: {
//           type: 'datetime'
//         },
//         yaxis: {
//           tooltip: {
//             enabled: true
//           }
//         }
//       },


//     };
//   }

//   render() {
//     return (
//       <div id="chart">
//         <Chart options={this.state.options} series={this.state.series} type="candlestick" height={350} width={900} />
//       </div>);
//   }
// }

// export default StockChart;


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


function StockChart(props) {

   let state = {
    // Date - Open - High - Low - Close
    // will need to run something like state.series[0].data[].unshift (push data into 0 slot)
      series: [{
        data: [{
          x: new Date(1538778600000),
          y: [6609.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        }
        ]
      }],
      options: {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'CandleStick Chart',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      }
  }

    return (
      <div id="chart">
        <Chart options={state.options} series={state.series} type="candlestick" height={350} width={900} />
      </div>);
}

export default StockChart;

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);





//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// WORK FROM JSFIDDLE (https://jsfiddle.net/3jd9e160/) TO PRACTICE TRACING FOR DATA IMPLEMENTATION:
//Date - Open - High - Low - Close

// let state = {
//   series: [{
//     data: [{
//       x: new Date(1538778600000),
//       y: [222, 222, 222, 222]
//     }]
//   }],
//   options: {
//     chart: {
//       type: 'candlestick',
//       height: 350
//     },
//     title: {
//       text: 'CandleStick Chart',
//       align: 'left'
//     },
//     xaxis: {
//       type: 'datetime'
//     },
//     yaxis: {
//       tooltip: {
//         enabled: true
//       }
//     }
//   }
// }


// console.log(state.series[0].data[0])
// //Date - Open - High - Low - Close
// state.series[0].data.unshift({
//   x: new Date(1538778600000),
//   y: [111, 111, 111, 111]
// });

// state.series[0].data.unshift({
//   x: new Date(1538778600000),
//   y: [333, 333, 333, 333]
// });

// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
// console.log(state.series[0].data[0])
// console.log(state.series[0].data[1])
// console.log(state.series[0].data[2])
// console.log(state.series[0].data)
// console.log(`XXXXXXXXXXXXXXX THIS IS THE STATE: XXXXXXXXXXXXXXX`)
// console.log(state)