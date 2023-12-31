import React, { useRef, useState } from "react";
import ToDoItem from "./ToDoItem";
import './ToDoList.css';

const TodoList = ()=>{
    const [resData,setResData] = useState(['起床','吃饭','学习react']);

    const ref = useRef(null);

    const add = ()=>{
        const newTodo = ref.current.value;
        if(newTodo){
            //不输入不添加
            setResData(resData=>[...resData,newTodo]);
            ref.current.value = '';
        }
    }


    return (
        <div className="main">
            <header>待办</header>
            <div className="input-part">
            
                <input ref={ref} type="text" name="todoitem"  />
                <button className="add-btn" onClick={add} >添加</button>
            </div>
            
            <div className="list">
                {resData.map((item,index)=><ToDoItem name={item} key={index}  />)}
            </div>
            
        </div>
    );
}

export default TodoList;