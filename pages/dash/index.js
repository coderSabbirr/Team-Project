import { Box } from '@mui/material'
import React from 'react'
import Widget from '../../Components/Widget'

const dash = () => {
  return (
    <div>
      <Box display="flex" sx={{ flexWrap: 'wrap' }} >
      <Widget type={'user'} />
      <Widget type={'order'} />
      <Widget type={'earning'} />
      <Widget type={'balance'} />
      </Box>
      
    </div>
  )
}

export default dash