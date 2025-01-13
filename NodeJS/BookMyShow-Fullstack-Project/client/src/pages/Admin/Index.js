import React, { Children } from 'react'
import MovieList from './MovieList'
import TheatresTable from './TheatresTable.js'
import { Tabs } from 'antd'

const Admin = () => {
  const tabItems = [
    { key: 1, label: "Movies", children: <MovieList /> },
    { key: 2, label: "Theatres", children: <TheatresTable /> },
  ]
  return (
    <div>
        <h1>Admin Page</h1>
        <Tabs items={tabItems} />
    </div>
  )
}

export default Admin