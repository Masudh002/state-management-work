import React from 'react'

const Panel2 = ({title, children, active, clickButton}) => {
  return (
    <div>
      <h1>{title}</h1>
      {active? (
        <p>{children}</p>
      ):(
        <button onClick={clickButton}>show</button>
      )}
    </div>
  )
}

export default Panel2
