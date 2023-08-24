import React, { useState } from 'react';
import './ToDOItem.css'

const ToDoItem = (props)=>{

    const [isComplete,setIsComplete] = useState(false);

    const complete = ()=>{
        setIsComplete(!isComplete);
        console.log(111);
    }

    return (
        <div className='item' onClick={complete}>
            <div className={isComplete?'circle-complete':'circle'}></div>
            <span className={isComplete?'complete':''}>{props.name}</span>
        </div>
    );
}

export default ToDoItem;
