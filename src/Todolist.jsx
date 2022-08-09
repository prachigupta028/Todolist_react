import React from 'react'

const Todolist = (props) => {
  return (
    <>
    <div>
    <span><button className='sub' onClick= {() =>{
        props.onSelect(props.id);
    }
    }>-</button></span>
   <span>{props.text}</span> 
    </div>
    </>
  )
}

export default Todolist