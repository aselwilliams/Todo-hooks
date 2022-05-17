import React from 'react'
import Task from './components/Task'

function Tasks({tasks,onDelete,onEdit,onToggle}) {
  return (
    <div>
        {tasks.map((task)=>(
                <Task task={task} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle}/>
            )
        )}

    </div>
  )
}

export default Tasks