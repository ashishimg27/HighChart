import React from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
    text: 'My stock chart'
  },
  credits: {
    text: 'IMG Global',
    href: 'https://www.imgglobalinfotech.com/'
},
  

  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    
    },
    {
        data:[3,5,6,3,6,8,4,6,7,4,3],
       
    }
    
  ]
}


const Stock = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
</div>

export default Stock;