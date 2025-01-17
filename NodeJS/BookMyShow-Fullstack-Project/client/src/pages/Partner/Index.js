import React from 'react'
import TheatreList from './TheatreList'
import { Tabs } from 'antd';

const Partner = () => {
  const tabItems = [
    { key: 1, label: "Theatres", children: <TheatreList /> }
  ]
  return (
    <div>
      <h1>Theatres Page</h1>
      <Tabs items={tabItems} />
    </div>
  )
}

export default Partner