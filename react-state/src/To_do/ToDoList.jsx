import React, { useState } from 'react'

const ToDoList = () => {
    const[tasks, setTasks]= useState([]);
    const [name, setName] = useState("");
    function addtask(){
        setTasks([...tasks,name]);
        setName("");
    }
   /* function deleteToDo(indexToDelete){
        setTasks(tasks.filter((_ , index) => index !== indexToDelete));
    };*/
    function deleteToDo(indexToDelete){
        const newTasks = [...tasks] //create a copy of the tasks array
        newTasks.splice(indexToDelete, 1)//Remove 1 element at the specified index
        setTasks(newTasks);
    };
    function clearAll (){
        setTasks([])
    }
  return (
    <div  style={{borderBottom:'2px solid black', paddingBottom:'5px'}}>
      <h1>Daily Task</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />      
      <button onClick={addtask} >Add Task</button>

      <ul style={{  border:"1px solid black", width:'40%', padding:"5px"}}>
        {tasks.map((task,index)=>(
            <li key={index}>
                 {task} 
                 <button onClick={() =>deleteToDo(index)}>delete</button>
            </li>
        ))}
      </ul>
      <button onClick={clearAll}>clear All Task</button>
    </div>
  )
}

export default ToDoList
