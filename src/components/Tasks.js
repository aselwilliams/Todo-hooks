import React from "react";
import Task from "./Task";

function Tasks({ tasks, onDelete, onEdit, onToggle, isComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
          isComplete={isComplete}
        />
      ))}
    </ul>
  );
}

export default Tasks;
