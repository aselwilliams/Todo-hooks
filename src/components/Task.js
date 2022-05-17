import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'

function Task(task,onDelete,onToggle,onEdit) {
  return (
    <ul>
        <li>
            <div>
            <input type='checkbox'onClick={()=>onToggle(task.id)}/>
            {task.text} 
            </div>
            <div>
            <FaTimes onClick={()=>onDelete(task.id)}/>
            <FaPencilAlt onClick={()=>onEdit(task.id)} />
            </div>
            
        </li>
    </ul>
  )
}

export default Task