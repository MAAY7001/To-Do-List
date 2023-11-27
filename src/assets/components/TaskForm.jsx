import React, { useState } from 'react';
import '../estilo/style.css'

export const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if (taskName.trim() !== ''){
            addTask(taskName) //llamar a la función para agregar tareas pasadas por promesas
            setTaskName('') //Con esto limpio la entrada del input
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit" >Agregar</button>
      
    </form>
  )
}