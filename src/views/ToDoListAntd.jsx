import React, { useRef, useState } from "react";
import ToDoItem from "./ToDoItem";
import './ToDoList.css';
import {Button,Input} from 'antd';
import { FormOutlined } from '@ant-design/icons';

const TodoListAntd = ()=>{
    const [resData,setResData] = useState(['起床','吃饭','学习react']);
    const [inputValue,setInputValue] = useState('');

    const ref = useRef(null);

    const add = ()=>{
        if(inputValue){
            setResData(resData=>[...resData,inputValue]);
            setInputValue('')
        }
    }

    const getInput = (e)=>{
        setInputValue(e.target.value);
    }

    return (
        <div className="main">
            <header>待办</header>
            <div className="input-part">
                <Input defaultValue={inputValue} value={inputValue} ref={ref} id="tditem" prefix={<FormOutlined />} onChange={getInput} />
                <Button className="add-btn" onClick={add} >添加</Button>
            </div>
            
            <div className="list">
                {resData.map((item,index)=><ToDoItem name={item} key={index}  />)}
            </div>
            
        </div>
    );
}

export default TodoListAntd;