import {useState} from 'react'
import './App.css';
import Tasks from './components/Tasks'
import React from 'react'
import AddTask from './components/AddTask';

function App() {
const [tasks, setTasks] =useState([
  {
    isComplete: false,
    text: 'Compile the Spring boot app for deployment',
    id:1
  },
  {
    isComplete: false,
    text: 'Create a Linux VM on Azure',
    id:2
  },
  {
    isComplete: false,
    text: 'Run the app on the VM',
    id:3
  }
])
const onAdd=(task)=>{
const id=Math.floor(Math.random()*10000)+1;
const newTask={id,...task}
setTasks([...tasks, newTask])
}
const onDelete=()=>{

}
const onEdit=()=>{

}
const onToggle=()=>{

}
  return (
    <div className='container'>
      <AddTask onAdd={onAdd} />
      <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />

    </div>
  )
}

export default App
