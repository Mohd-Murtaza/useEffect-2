import React, { useEffect, useState } from 'react'
var timerInterval;
const Timer = ({flag}) => {
    const [timer, setTimer] = useState(0);
    useEffect(()=>{
        if(flag){
          clearInterval(timerInterval);
          return;
        }
        timerInterval = setInterval(()=>{
            setTimer(timer=>timer+1);
        }, 1000)
    }, [flag]);
    if(flag)
      return ''
  return (
    <div>
      <h1>Timer : {timer}</h1>
    </div>
  )
}

export default Timer
