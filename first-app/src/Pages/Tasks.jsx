import { useState, useMemo } from "react";
import StatCard from "../Components/StatCard";

export default function TaskManagerPage() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
      if (!newTask.trim()) return;

      const taskObj = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title: newTask,
        completed: false,
      };

    setTasks([...tasks, taskObj]);
    setNewTask("");
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  return (
    <div className="task-page">
      <h1 className="task-title">Task Manager</h1>

      <div className="stats-grid">
        <StatCard label="Total Tasks" value={stats.total} icon="📋" />
        <StatCard label="Completed" value={stats.completed} icon="✅" />
        <StatCard label="Pending" value={stats.pending} icon="⏳" />
      </div>

      <div className="add-task-form">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />
        <button onClick={handleAddTask} className="task-btn">
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
            onClick={() => toggleCompleted(task.id)}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
