import React, { useState } from 'react';

export const TaskItem = ({handleComplete, handleDelete, task}) => {
    const [isCompleted, setIsCompleted] = useState(false)

    const toggleComplete = () =>{
        setIsCompleted(!isCompleted)
        handleComplete(task.id) 
    }

    const onDelete = () => {
        handleDelete(task.id)
    }


  return (
    <div className='style'>
        <span style={{ textDecoration: isCompleted ? 'line-through' : '' }}>
            {task.name}
        </span>
        <button onClick={toggleComplete}>Completar</button>
        <button onClick={onDelete}>Eliminar</button>
    </div>
  )
}