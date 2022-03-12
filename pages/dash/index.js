import { Box } from '@mui/material'
import React from 'react'
import Widget from '../../Components/Widget';
import Featured from '../../Components/Featured';
import Chart from '../../Components/Chart';

import dashStyle from '../../styles/dash.module.scss'

const dash = () => {
  return (

    <div className={dashStyle.home}>
       <div className={dashStyle.homeContainer}>
          <div className={dashStyle.widgets}>
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
            </div>
            <div className={dashStyle.charts}>
              <Featured />
              <Chart />
              </div>
      
    </div>
    </div>
  )
}

export default dash