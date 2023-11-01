import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setTimer(timer=>timer+1);
        }, 1000)
    }, [])
  return (
    <div>
      <h1>Timer : {timer}</h1>
    </div>
  )
}

export default Timer
