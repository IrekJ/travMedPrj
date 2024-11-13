import React from 'react'
import { RingLoader } from 'react-spinners'

const Spinner = ({loading}) => {
    const cssOverride = {
        display: 'block',
        margin: '100px auto'
    }
  return (
    <RingLoader
    color='#f542bf'
    loading={loading}
    cssOverride={cssOverride}
    size={150} />
  )
}

export default Spinner