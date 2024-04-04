import React, { useReducer } from 'react'
 const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_NAME':
            return {...state, name: action.payload};
            case 'ADD_NAME':
                return{...state,
                     names: [...state.names, state.name] ,name: '',};
            default: 
                return state;
    }
}

const ReducerExample2 = () => {
    const [state, dispatch] = useReducer(reducer, {
        names:[],
        name: "",
    });
  return (
    <div  style={{borderBottom:'2px solid black', paddingBottom:'5px'}}>
      <input type="text" value={state.name} onChange={(e)=> dispatch({type:'SET_NAME', payload:e.target.value})} />
      <div> Name = {state.name}</div>
      <button onClick={ ()=> dispatch({ type: 'ADD_NAME'})}>ADD NAME</button>
      {state.names.map((name, index)=> (
        <div key={index}> {name} </div>
      ))}
    </div>
  )
}

export default ReducerExample2
