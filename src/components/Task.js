import React from 'react'
import {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'
import AddTask from './AddTask'

function Task({task,onDelete,onToggle,onAdd}) {
  const [isEditing,setIsEditing]=useState(false)
  const [text,setText]=useState(task)


  const onEdit=()=>{
      setIsEditing(!isEditing) 
  }
  const handleUpdate=(newText)=>{
    console.log(newText)
    setText(newText)
    // setIsEditing(!isEditing)
  }

  const onSubmit=(e,newText)=>{
    e.preventDefault()
    setText(newText)

}
  return (
    <>
        <li key={task.id} className='flex'>
          {isEditing ? 
          (
            <form onSubmit={onSubmit}>
                <input value={task.text} type="text" className='edit-input'onChange={(e)=>{handleUpdate(e.target.value)}} />
                <button className='btn btn-success'>Done</button>
            </form>
          ) : (
            <div className='text'>
              <div className='checkbox'><input type='checkbox'onClick={()=>onToggle(task.id)}/></div>
              <p>{task.text} </p>
            </div>
          )}
            
            <div>
            <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)}/>
            <FaPencilAlt style={{color:'#333', cursor:'pointer'}} onClick={()=>onEdit(task.id)} />
            </div>
        </li>
        </>
  )
}

export default Task