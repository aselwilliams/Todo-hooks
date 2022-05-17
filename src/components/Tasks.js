import React from 'react'
import Task from './Task'

function Tasks({tasks,onDelete,onEdit,onToggle}) {
  return (
    <div>
        {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle}/>
            )
        )}
    </div>
  )
}

export default Tasks