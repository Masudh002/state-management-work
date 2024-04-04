import React from 'react'
import Accordion from './Components/Accordion'
import Accordion2 from './Lifting state up/Accordion2'
import FilterbleList from './Filtering Items/FilterbleList'
import NameList from './To_do/NameList'
import ToDoList from './To_do/ToDoList'
import UseReducer from './reducer/UseReducer'
import ReducerExample2 from './reducer/ReducerExample2'

const App = () => {
  return (
    <div style={{display:'flex', flexDirection:"column", gap:"10px"}}>
      <Accordion /> {/* component not sharing state*/ }
      <Accordion2/>
      {/*<FilterbleList/>*/}
      <NameList/>
      <ToDoList/>
      <UseReducer/>
      <ReducerExample2/>
    </div>
    
  )
}

export default App
