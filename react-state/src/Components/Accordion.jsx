import React from 'react'
import Panel from './Panel'

//Component not sharing state
const Accordion = () => {
  return (
    <div style={{borderBottom:'2px solid black', paddingBottom:'5px'}}>
      <h1>1. Masudh'work</h1>
      <p> pressing one panel’s button does not affect the other panel—they are independent.</p>
      <Panel title='About'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam, 
      illo sunt maxime sint obcaecati repellendus fugit recusandae cum id aperiam fugiat amet natus nisi tenetur nobis vero iure laboriosam.</Panel>
      <Panel title='Achievements'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quibusdam, 
      illo sunt maxime sint obcaecati repellendus fugit recusandae cum id aperiam fugiat amet natus nisi tenetur nobis vero iure laboriosam.</Panel>
    </div>
  )
}

export default Accordion
