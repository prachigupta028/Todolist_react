import React from 'react';
import { useState } from 'react';
import Todolist from './Todolist';

const App = () => {
    const[inputevent, setInputevent]=useState();
    const [items , setItems]=useState([]);

    const data=(event)=>{
     setInputevent(event.target.value);
    }

    const list=()=>{
        setItems((oldvalue)=>{
            return[...oldvalue,inputevent];
        });
        setInputevent(" ");
      }
        const deleteitems=(id)=>{
          setItems((oldvalue)=>{
           return oldvalue.filter((arr,index)=>{
            return index!==id;
           });
          })
        }
         


  return (
    <>
    <div  className='head'>
    <div className='header'>
       <h1>To Do List</h1>
       <input type="text" placeholder="Add a Items" onChange={data} value={inputevent}/>
       <button onClick={list} className="add">+</button>
       <h3>
        {items.map((itemvalue,index)=>{
            return <Todolist 
            key={index}
            id={index}
            text={itemvalue} 
            onSelect={deleteitems}
            />
        })
        }
        
       </h3>
    </div>
  </div>
    </>
  )
}

export default App