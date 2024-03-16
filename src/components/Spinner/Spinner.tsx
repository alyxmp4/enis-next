import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Spinner = () => {
  return (
    <Spin
      indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

export default Spinner
