import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './views/ToDoList'
import TodoListAntd from './views/ToDoListAntd'
import { Menu } from 'antd';

function App() {


  return (
    <>
    <TodoList/>
    <TodoListAntd/>
    </>
  )
}

export default App
