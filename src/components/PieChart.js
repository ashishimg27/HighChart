import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Growth of Alchol Brands'
      },
      credits: {
        text: 'IMG Global',
        href: 'https://www.imgglobalinfotech.com/'
    },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Blenders pride',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Black Dog',
          y: 11.84
        }, {
          name: 'Magic Moment',
          y: 10.85
        }, {
          name: 'Teachers',
          y: 4.67
        }, {
          name: 'Red Lable',
          y: 4.18
        }, {
          name: 'Royal Stag',
          y: 1.64
        }, {
          name: 'Imperial Blue',
          y: 1.6
        }, {
          name: 'Old Monk',
          y: 1.2
        }, {
          name: 'Signature',
          y: 2.61
        }]
      



    }]
};



const PieChart = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>

export default PieChart;