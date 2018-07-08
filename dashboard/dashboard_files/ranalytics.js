$(document).ready(function() {

    $("#cooTree").hide()

    $("#cfo").click(function() {
        $("#dropdown").text("CFO");
        // $( "#completion" ).text("40%");
        $("#cooTree").hide()
        $("#cfoTree").show()
    });

    $("#coo").click(function() {
        $("#dropdown").text("COO");
        // $( "#completion" ).text("20%");
        $("#cfoTree").hide()
        $("#cooTree").show()
    });

    $("#monthstats").click(function() {
        $("#monthstats").addClass("active");
        $("#yearstats").removeClass("active");
    });

    $("#yearstats").click(function() {
        $("#yearstats").addClass("active");
        $("#monthstats").removeClass("active");
    });

    // Highcharts.chart('earningPerMonth', {
    //     chart: {
    //         type: 'column'
    //     },
    //     exporting: { enabled: false },
    //     title: {
    //         text: 'Monthly Earning Chart'
    //     },

    //     subtitle: {
    //         text: 'Total amount earned as a raven'
    //     },

    //     yAxis: {
    //          stackLabels: {
    //             enabled: true,
    //             style: {
    //                 fontWeight: 'bold',
    //                 color:'gray'
    //             }
    //          },
    //     title: {
    //             text: 'Earning Per Month ($)'
    //         }
    //     },
    //     xAxis: {
    //         type: 'datetime',
    //         dateTimeLabelFormats: { // don't display the dummy year
    //             month: '%e. %b',
    //             year: '%b'
    //         },
    //         title: {
    //             text: 'Date'
    //         }
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'middle'
    //     },

    //     plotOptions: {
    //         column: {
    //             stacking: 'normal',
    //             dataLabels: {
    //                 enabled: true,
    //                 color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
    //             }
    //         }
    //     },

    //     series: [{
    //         name: 'Education',
    //         data:  [
    //             [Date.UTC(2017, 6, 1), 60],
    //             [Date.UTC(2017, 7, 1), 20],
    //             [Date.UTC(2017, 8, 1), 60],
    //             [Date.UTC(2017, 9, 1), 80],
    //             [Date.UTC(2017, 10, 1), 100],
    //             [Date.UTC(2017, 11, 1), 40],
    //             [Date.UTC(2017, 12, 1), 60],
    //             [Date.UTC(2018, 1, 1), 20],
    //             [Date.UTC(2018, 2, 1), 50],
    //             [Date.UTC(2018, 3, 1), 80],
    //             [Date.UTC(2018, 4, 1), 160],
    //             [Date.UTC(2018, 5, 1), 160],

    //         ]},{
    //         name: 'Investment',
    //         data:  [
    //             [Date.UTC(2017, 6, 1), 20],
    //             [Date.UTC(2017, 7, 1), 60],
    //             [Date.UTC(2017, 8, 1), 20],
    //             [Date.UTC(2017, 9, 1), 50],
    //             [Date.UTC(2017, 10, 1), 0],
    //             [Date.UTC(2017, 11, 1), 40],
    //             [Date.UTC(2017, 12, 1), 70],
    //             [Date.UTC(2018, 1, 1), 30],
    //             [Date.UTC(2018, 2, 1), 70],
    //             [Date.UTC(2018, 3, 1), 80],
    //             [Date.UTC(2018, 4, 1), 20],
    //             [Date.UTC(2018, 5, 1), 10],

    //             ]
    //         },{
    //         name: 'Market',
    //         data:  [
    //             [Date.UTC(2017, 6, 1), 50],
    //             [Date.UTC(2017, 7, 1), 40],
    //             [Date.UTC(2017, 8, 1), 80],
    //             [Date.UTC(2017, 9, 1), 20],
    //             [Date.UTC(2017, 10, 1), 60],
    //             [Date.UTC(2017, 11, 1), 10],
    //             [Date.UTC(2017, 12, 1), 80],
    //             [Date.UTC(2018, 1, 1), 70],
    //             [Date.UTC(2018, 2, 1), 30],
    //             [Date.UTC(2018, 3, 1), 20],
    //             [Date.UTC(2018, 4, 1), 10],
    //             [Date.UTC(2018, 5, 1), 50],

    //         ]
    //     }
    //     ],

    //     responsive: {
    //         rules: [{
    //             condition: {
    //                 maxWidth: 500
    //             },
    //             chartOptions: {
    //                 legend: {
    //                     layout: 'horizontal',
    //                     align: 'center',
    //                     verticalAlign: 'bottom'
    //                 }
    //             }
    //         }]
    //     }

    // });

    // Highcharts.chart('jobsPerMonth', {
    //     exporting: { enabled: false },
    //     title: {
    //         text: 'Monthly Job Completion'
    //     },

    //     subtitle: {
    //         text: 'Number of Jobs Completed'
    //     },

    //     yAxis: {
    //         title: {
    //             text: 'Number of jobs'
    //         }
    //     },
    //     xAxis: {
    //         type: 'datetime',
    //         dateTimeLabelFormats: { // don't display the dummy year
    //             month: '%e. %b',
    //             year: '%b'
    //         },
    //         title: {
    //             text: 'Date'
    //         }
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'middle'
    //     },

    //     plotOptions: {
    //         series: {
    //             label: {
    //                 connectorAllowed: false
    //             },
    //         }
    //     },

    //     series: [{
    //         name: 'Education',
    //         data:  [
    //             [Date.UTC(2017, 6, 1), 2],
    //             [Date.UTC(2017, 7, 1), 1],
    //             [Date.UTC(2017, 8, 1), 3],
    //             [Date.UTC(2017, 9, 1), 4],
    //             [Date.UTC(2017, 10, 1), 5],
    //             [Date.UTC(2017, 11, 1), 2],
    //             [Date.UTC(2017, 12, 1), 1],
    //             [Date.UTC(2018, 1, 1), 1],
    //             [Date.UTC(2018, 2, 1), 2],
    //             [Date.UTC(2018, 3, 1), 3],
    //             [Date.UTC(2018, 4, 1), 2],
    //             [Date.UTC(2018, 5, 1), 4],

    //         ]},{
    //         name: 'Investment',
    //         data:  [
    //             [Date.UTC(2017, 6, 1), 1],
    //             [Date.UTC(2017, 7, 1), 3],
    //             [Date.UTC(2017, 8, 1), 2],
    //             [Date.UTC(2017, 9, 1), 1],
    //             [Date.UTC(2017, 10, 1), 0],
    //             [Date.UTC(2017, 11, 1), 2],
    //             [Date.UTC(2017, 12, 1), 2],
    //             [Date.UTC(2018, 1, 1), 1],
    //             [Date.UTC(2018, 2, 1), 2],
    //             [Date.UTC(2018, 3, 1), 4],
    //             [Date.UTC(2018, 4, 1), 1],
    //             [Date.UTC(2018, 5, 1), 1],

    //             ]
    //         },{
    //         name: 'Market',
    //         data:  [
    //             [Date.UTC(2017, 6, 1), 1],
    //             [Date.UTC(2017, 7, 1), 2],
    //             [Date.UTC(2017, 8, 1), 4],
    //             [Date.UTC(2017, 9, 1), 1],
    //             [Date.UTC(2017, 10, 1), 2],
    //             [Date.UTC(2017, 11, 1), 1],
    //             [Date.UTC(2017, 12, 1), 2],
    //             [Date.UTC(2018, 1, 1), 2],
    //             [Date.UTC(2018, 2, 1), 1],
    //             [Date.UTC(2018, 3, 1), 2],
    //             [Date.UTC(2018, 4, 1), 1],
    //             [Date.UTC(2018, 5, 1), 2],

    //         ]
    //     }
    //     ],

    //     responsive: {
    //         rules: [{
    //             condition: {
    //                 maxWidth: 500
    //             },
    //             chartOptions: {
    //                 legend: {
    //                     layout: 'horizontal',
    //                     align: 'center',
    //                     verticalAlign: 'bottom'
    //                 }
    //             }
    //         }]
    //     }

    // });

    Highcharts.chart('lifetimejobsskill', {
        exporting: {
            enabled: false
        },
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Skills breakdown',
            align: 'center',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Accounting Standards', 'Accounting Systems', 'Business Acumen', 'Business Innovation',
                'Data Analysis', 'Disruption Management'
            ],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            showInLegend: false,
            name: 'Current employees',
            data: [23, 63, 54, 45, 22, 32],
            pointPlacement: 'on'
        }, {
            showInLegend: false,
            name: 'Target employees',
            data: [75, 63, 89, 66, 52, 44],
            pointPlacement: 'on',
            color: "red",
        }]

    });

    Highcharts.chart('forecasting', {

        title: {
            text: 'Accounting Systems'
        },

        subtitle: {
            text: 'Trends and projections'
        },

        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        xAxis: {
            categories: ["2017 Q1", "2017 Q2", "2017 Q3", "2017 Q4", "2018 Q1", "2018 Q2", "2018 Q3", "2018 Q4"]
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            }
        },

        series: [{
            name: 'Supply',
            data: [0, 2, 2, 3, 4, 6, 6, 10],
            color: "green",
        }, {
            name: 'Demand',
            data: [1, 1, 2, 2, 4, 4, 8, 15],
            color: "red",
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });

    $('#matrix').highcharts({

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 40
        },

        title: {
            text: 'Competency level'
        },

        xAxis: {
            categories: ['Zuhailo', 'Benjamin', 'Nicole', 'Ali', 'Darren', 'Vanessa', 'Andre', 'Alicia', 'Jia Yi', 'Raja']
        },

        yAxis: {
            categories: ['Accounting standards', 'Accounting systems', 'Business acumen', 'Business innovation', 'Data analysis', 'Disruption management'],
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#AA1111',
            maxColor: "#11AA11"
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320
        },

        tooltip: {
            formatter: function() {
                return '<b>' + this.series.xAxis.categories[this.point.x] + ' has </b> competency level of <br><b>' +
                    this.point.value + '</b> for <b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Competency level',
            borderWidth: 1,
            data: [
                [0, 0, 1, 2],
                [0, 1, 1, 3],
                [0, 2, 3, 1],
                [0, 3, 4, 1],
                [0, 4, 4, 1],
                [1, 0, 2, 1],
                [1, 1, 5, 1],
                [1, 2, 1, 1],
                [1, 3, 1, 1],
                [1, 4, 4, 1],
                [2, 0, 3, 1],
                [2, 1, 1, 1],
                [2, 2, 1, 1],
                [2, 3, 4, 1],
                [2, 4, 2, 1],
                [3, 0, 2, 1],
                [3, 1, 3, 1],
                [3, 2, 4, 1],
                [3, 3, 1, 1],
                [3, 4, 1, 1],
                [4, 0, 3, 1],
                [4, 1, 5, 1],
                [4, 2, 2, 1],
                [4, 3, 1, 1],
                [4, 4, 1, 1],
                [5, 0, 2, 1],
                [5, 1, 3, 1],
                [5, 2, 2, 1],
                [5, 3, 1, 1],
                [5, 4, 1, 1],
                [6, 0, 1, 1],
                [6, 1, 4, 1],
                [6, 2, 4, 1],
                [6, 3, 3, 1],
                [6, 4, 1, 1],
                [7, 0, 1, 1],
                [7, 1, 1, 1],
                [7, 2, 2, 1],
                [7, 3, 2, 1],
                [7, 4, 3, 1],
                [8, 0, 2, 1],
                [8, 1, 1, 1],
                [8, 2, 1, 1],
                [8, 3, 4, 1],
                [8, 4, 4, 1],
                [9, 0, 4, 1],
                [9, 1, 4, 1],
                [9, 2, 3, 1],
                [9, 3, 1, 1],
                [9, 4, 3, 1]
            ],
            dataLabels: {
                enabled: true,
                color: 'black',
                style: {
                    textShadow: 'none'
                }
            }
        }]

    });
});
