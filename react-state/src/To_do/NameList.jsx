import React, { useState } from 'react'

const NameList = () => {
    const [lists, setLists] = useState(['Masudh', 'Mohd', 'Said']);
    const [name, setName] = useState("");
    function addName(){
        setLists([...lists, name]);
        setName("");
    }
  return (
    <div  style={{borderBottom:'2px solid black', paddingBottom:'5px'}} >
        <h1>A Simple namelist</h1>
      <ul>
        {lists.map((list) =>(
            <li key={list}>{list}</li>
        ))}
      </ul>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
      <button type='submit' onClick={addName}>Add Name</button>
    </div>
  )
}

export default NameList
