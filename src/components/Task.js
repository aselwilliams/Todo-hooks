import React from 'react'
import {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'

function Task({task,onDelete,onToggle,onEdit}) {
  const [isEditing,setIsEditing]=useState(false)
  return (
    <>
        <li key={task.id} className='flex'>
            <div className='text'>
              <div className='checkbox'><input type='checkbox'onClick={()=>onToggle(task.id)}/></div>
              <p>{task.text} </p>
            </div>
            <div>
            <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)}/>
            <FaPencilAlt style={{color:'#333', cursor:'pointer'}} onClick={()=>onEdit(task.id)} />
            </div>
        </li>
        </>
  )
}

export default Task