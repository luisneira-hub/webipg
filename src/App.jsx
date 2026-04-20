import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // cargar datos
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const savedTheme = JSON.parse(localStorage.getItem("theme"));

    if (savedTasks) setTasks(savedTasks);
    if (savedTheme !== null) setDarkMode(savedTheme);
  }, []);

  // guardar datos
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [tasks, darkMode]);

  // aplicar tema a TODA la página
  useEffect(() => {
    document.documentElement.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  // validar solo números
  const handleNumberInput = (value, setter) => {
    if (/^\d*$/.test(value)) setter(value);
  };

  const addTask = () => {
    if (input.trim() === "") return;

    const h = parseInt(hours) || 0;
    const m = parseInt(minutes) || 0;

    if (h === 0 && m === 0) return;

    const newTask = {
      text: input,
      minutes: h * 60 + m,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
    setHours("");
    setMinutes("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  // tiempo pendiente
  const totalMinutes = tasks
    .filter((t) => !t.completed)
    .reduce((acc, t) => acc + t.minutes, 0);

  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  return (
    <main className="container">
      <h1>Lista de Tareas</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌙 Oscuro" : "🌞 Claro"}
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />

      <input
        type="text"
        placeholder="Horas"
        value={hours}
        onChange={(e) => handleNumberInput(e.target.value, setHours)}
      />

      <input
        type="text"
        placeholder="Minutos"
        value={minutes}
        onChange={(e) => handleNumberInput(e.target.value, setMinutes)}
      />

      <button onClick={addTask}>Agregar</button>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

      <h2>
        Tiempo pendiente: {totalHours}h {remainingMinutes}min
      </h2>
    </main>
  );
}

export default App;