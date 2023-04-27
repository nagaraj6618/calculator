import React, { useState } from 'react'
import './Timecss.css';
function TimeComponent() {
  const now=new Date()
  const time=now.toLocaleTimeString();
  const[currentTime,setCurrentTime]=useState(time);
  const upDateTime=()=>{
    const now=new Date()
    const time=now.toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(upDateTime,1000)
  return (
    <div className='time-app'>
      <h1 className='time'>{currentTime}</h1>
    </div>
  )
}

export default TimeComponent