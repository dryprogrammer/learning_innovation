
import React from "react";
import ReactHighcharts from 'react-highcharts';
var HighchartsMore = require('highcharts-more');
HighchartsMore(ReactHighcharts.Highcharts);
// var HighchartsExporting = require('highcharts-exporting');
// HighchartsExporting(ReactHighcharts.Highcharts);

// var Highlight = require('react-highlight');
// var ReactDOM = require('react-dom');
const ReactHighmaps = require('react-highcharts/ReactHighmaps');

var config = {
  chart: {
    polar: true
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
};

const chartConfig = {
  chart: {
      type: 'heatmap',
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1
  },

  title: {
    text: 'Competency level'
  },

  xAxis: {
    categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
  },

  yAxis: {
    categories: ['Data analysis', 'Business innovation', 'Business acumen', 'Business innovation', 'Accounting systems', 'Accounting standards'],
    title: null
  },

  // colorAxis: {
  //     min: 0,
  // },

  // legend: {
  //     align: 'right',
  //     layout: 'vertical',
  //     margin: 0,
  //     verticalAlign: 'top',
  //     y: 25,
  //     symbolHeight: 280
  // },

  series: [{
      name: 'Sales per employee',
      borderWidth: 1,
      data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
      // dataLabels: {
      //     enabled: true,
      //     color: '#000000'
      // }
  }]
};

export const HeatMap = () => <ReactHighcharts config = {chartConfig}/>;