import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'column'
    },
    credits: {
        text: 'IMG Global',
        href: 'https://www.imgglobalinfotech.com/'
    },
    tooltip: {
       
            formatter: function() {
                return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series '+ this.series.name;
            },
        
        backgroundColor: '#FCFFC5',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3
    },
    title: {
        text: 'Consume Alcohol'
    },
    xAxis: {
        categories: ['Whisky', 'Vodka', 'Scotch']
    },
    yAxis: {
        title: {
            text: 'Quantity'
        }
    },
    series: [{
        name: 'Ashish',
        data: [1, 0, 4]
    }, {
        name: 'Divyansh',
        data: [5, 7, 3]
    }]
};

const Basic = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>

export default Basic;