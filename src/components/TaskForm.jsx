import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from 'reactstrap';  

function TaskForm({ addTask, editingIndex, tasks  }) {
  // Estado para manejar el texto de la nueva tarea
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (editingIndex !== null) {
      setTaskText(tasks[editingIndex].text);  // Carga el texto de la tarea en edición
    } else {
      setTaskText('');  // Limpia el campo si no hay tarea en edición
    }
  }, [editingIndex, tasks]);

  // Función que se ejecuta cuando el formulario es enviado
  const handleSubmit = (e) => {
    e.preventDefault();  // Previene la recarga de la página
    if (taskText.trim() !== '') {  // Asegura que la tarea no esté vacía
      addTask(taskText);  // Llama a la función del componente padre (App) para agregar la tarea
      setTaskText('');  // Limpia el campo de texto
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
       <div className="input-group mb-3 mx-auto" style={{ maxWidth: '500px' }}>
      <input className="form-control"
        type="text"
        placeholder="Nueva tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}  // Actualiza el estado al escribir en el input
      
      />
       <div className="input-group-append">
      <Button className={`btn ${editingIndex !== null ? 'btn-warning' : 'btn-success'}`} style={{ marginLeft: '10px' }} type="submit">{editingIndex !== null ? "Actualizar" : "Agregar"}</Button>
      </div>
      </div>
    </Form>
  );
}

export default TaskForm;