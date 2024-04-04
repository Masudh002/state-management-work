import React, { useState } from 'react'

const Panel = ({title, children}) => {
    const [active, setActive] = useState(false);

  return (
    <div>
        <h1>{title}</h1>
        {active && (
            <p>{children}</p>
        )}       
        <button onClick={()=>setActive(!active)}>
            {active? 'Hide':'Show'}
        </button>
    </div>
    /*<div>
     <h1>{title}</h1>
     {active ? (
         <p>{children}</p>
         ): (
              <button onClick={()=>setActive(true)}>show</button>
            )
       } 
    </div>*/
  )
}

export default Panel
