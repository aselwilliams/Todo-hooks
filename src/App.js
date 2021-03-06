import { useState,useEffect } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import Form from './components/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import {nanoid} from 'nanoid'

const getLocalStorage=()=>{
  let tasksList=localStorage.getItem('tasks-list');
  if(tasksList){
    return JSON.parse(localStorage.getItem('tasks-list'))
  } else {
    return []
  }
}

function App() {
  const [text, setText] = useState("");
  const [isComplete,setIsComplete]=useState(false)
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [tasks, setTasks] = useState(getLocalStorage());

  useEffect(()=>{
    localStorage.setItem('tasks-list', JSON.stringify(tasks))
  },[tasks])
const handleChange=(e)=>{
  setText(e.target.value)
}
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    } else if (text && isEditing) {
      setTasks(
        tasks.map((item) => {
          if (item.id === editID) {
            return { ...item, text: text };
          }
          return item;
        })
      );
      setText("");
      setEditID(null);
      setIsEditing(false);
    } else {
      onAdd({ text, isComplete });
      setIsComplete(false);
      setText(text);
    }
    setText('')
  };

  const onAdd = (task) => {
    const id = nanoid()
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("DELETE");
  };

  const editTask = (id) => {
    console.log("EDIT");
    const specificItem = tasks.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setText(specificItem.text);
  };

  const toggleIsComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleClear=()=>{
    setTasks([])
  }

  const formProps= {
    onSubmit: onSubmit,
    text: text,
    onChange: handleChange,
    isEditing: isEditing
  }
  const tasksProps= {
    tasks: tasks,
        onDelete: deleteTask,
        onToggle: toggleIsComplete,
        onEdit: editTask,
        isComplete: isComplete
  }
  return (
    <div className="container">
      <div className="wrapper">
      <h1>ToDo List</h1>
      <Form {...formProps} />
      <div>
      <Tasks {...tasksProps} />
      </div>
      <button onClick={handleClear} className="clear">Clear all</button>
      </div>
    </div>
  );
}

export default App;
