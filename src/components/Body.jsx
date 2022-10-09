import React from 'react'
import DisplayArea from './DisplayArea/DisplayArea'
import Sidebar from './Sidebar/Sidebar'

const Body = () => {
  return (
    <div className='flex w-full'>
        <Sidebar />
        <DisplayArea />
    </div>
  )
}

export default Body