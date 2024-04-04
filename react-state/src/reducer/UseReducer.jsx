import React, { useReducer } from 'react'

//defining a reducer
const reducer = (state, action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1 };
            case 'DECREMENT' :
                return {count: state.count - 1 };
                default:
                    return state;
    }
};

const UseReducer = () => {
    const [state , dispatch] = useReducer(reducer, {count: 0});
  return (
    <div  style={{borderBottom:'2px solid black', paddingBottom:'5px'}}>
        <h1>Using UseReducer</h1>
       count: {state.count} <br />
       <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
       <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default UseReducer
