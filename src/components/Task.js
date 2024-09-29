import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';  

function Task({ task, index, deleteTask, updateTask  }) {
  return (
    <li className="align-items-center">
      {task.text}  {/* Muestra el texto de la tarea */}
      <Button className="btn btn-warning btn-sm ml-2" onClick={() => updateTask(index)}>Editar</Button>  {/* Botón para editar la tarea */}
      <Button className="btn btn-danger btn-sm ml-2" onClick={() => deleteTask(index)}>Eliminar</Button>  {/* Botón para eliminar la tarea */}
    </li>
   
  );
}

export default Task;