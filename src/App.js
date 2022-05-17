import {useState} from 'react'
import './App.css';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

function App() {
const [tasks, setTasks] =useState(
  [
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
]
)

const onAdd=(task)=>{
const id=Math.floor(Math.random()*10000)+1;
const newTask={id,...task}
setTasks([...tasks, newTask])
}
const deleteTask=(id)=>{
  setTasks(tasks.filter(task=>task.id!==id))
  console.log('DELETE')
}

const editTask=()=>{
console.log('EDIT')

}
const toggleIsComplete=(id)=>{
  setTasks(tasks.map(task=>task.id===id ? {...task, isComplete: !task.isComplete} : task))
}
  return (
    <div className='container'>
      <AddTask onAdd={onAdd} />
      <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} onToggle={toggleIsComplete}/>
    </div>
  )
}

export default App
