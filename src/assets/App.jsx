
import React, { useState, useEffect } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import './estilo/style.css'


const App = () => {
  const [tasks, setTasks] = useState([]);

  // Funciones para gestionar eventos
  const handleComplete = taskId => {
    // Lógica para marcar como completada una tarea
    // Actualización del estado de las tareas
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed : !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = taskId => {
    // Lógica para eliminar una tarea
    // Actualización del estado de las tareas
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const addTask = taskName => {
    // Lógica para agregar una nueva tarea
    // Generación de una nueva tarea y actualización del estado de las tareas
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

   // useEffect para cargar tareas desde localStorage al inicio
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // useEffect para realizar acciones cuando cambia el estado de las tareas
  useEffect(() => {
    // Guardar tareas en localStorage cada vez que cambie el estado de las tareas
    saveTasksToLocalStorage(tasks);
    // Ejemplo: Mostrar un mensaje cuando se agrega o elimina una tarea
    console.log('Tareas actualizadas:', tasks);
  }, [tasks]);

  // Función para guardar tareas en localStorage
  const saveTasksToLocalStorage = updatedTasks => {
    try {
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  };



  return (
    <div className='body'>
      <h1>Lista de tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );

};

export default App;

// iconos para agregar : import { MdOutlineTaskAlt } from "react-icons/md"; import { BsListTask } from "react-icons/bs";
//iconos animados https://www.flaticon.es/iconos-animados-mas-descargados
// gif para la parte de abajo: <iframe src="https://gifer.com/embed/1PwK" width=480 height=360.241 frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com">a través de GIFER</a></p>
// gif para tema 1 <iframe src="https://gifer.com/embed/14Se" width=480 height=480.000 frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com">a través de GIFER</a></p>
// gif para tema 2 <iframe src="https://gifer.com/embed/6mz" width=480 height=480.000 frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com">a través de GIFER</a></p>
// gif para tema 3 <iframe src="https://gifer.com/embed/14Su" width=480 height=480.000 frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com">a través de GIFER</a></p>
// gif para tema 4 <iframe src="https://gifer.com/embed/JQo" width=480 height=480.000 frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com">a través de GIFER</a></p>
