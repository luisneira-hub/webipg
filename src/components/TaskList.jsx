function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
      {tasks.map((task, index) => {
        const h = Math.floor(task.minutes / 60);
        const m = task.minutes % 60;

        return (
          <li key={index} className={task.completed ? "done" : ""}>
            
            <span>
              {task.text} - {h}h {m}min
            </span>

            <div>
              <button onClick={() => toggleTask(index)}>
                {task.completed ? "✔️ Completado" : "Marcar"}
              </button>

              <button onClick={() => deleteTask(index)}>
                Eliminar
              </button>
            </div>

          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;