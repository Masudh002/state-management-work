import React, { useState } from 'react'
import Panel2 from './Panel2'

const Accordion2 = () => {

    const [activeIndex, setActiveIndex] = useState(0); //When the activeIndex is 0, the first panel is active, and when it’s 1, it’s the second one.

  return (
    <div style={{borderBottom:'2px solid black', paddingBottom:'5px'}}>
        <h1 >2. Masudh's Second work (lifting state up)</h1>
        <p>Expanding the first panel should collapse the second panel and viceversa </p>
         <Panel2 title='About'  active={activeIndex === 1} clickButton={ ()=> setActiveIndex(1)}>
              sed illum odit esse dignissimos nemo blanditiis, quis sit assumenda autem facere iusto, unde iure ea voluptatem dolor eius fugiat!
          </Panel2>
          <Panel2 title='Achievements'  active={activeIndex === 0} clickButton={ ()=> setActiveIndex(0)}>
              sed illum odit esse dignissimos nemo blanditiis, quis sit assumenda autem facere iusto, unde iure ea voluptatem dolor eius fugiat!
          </Panel2>      
    </div>
  )
}

export default Accordion2
