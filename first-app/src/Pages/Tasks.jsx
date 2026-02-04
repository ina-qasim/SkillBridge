import { useMemo } from "react";
import StatCard from "../Components/StatCard";

const tasks = [
  {
    id: 2,
    title: "Build a Todo App",
    description: "Create a functional todo application using React",
    courseId: 1,
    completed: true,
    dueDate: "2026-01-08",
    priority: "medium",
    estimatedTime: 180,
  },
  {
    id: 3,
    title: "Study TypeScript Generics",
    description: "Learn about TypeScript generics with practical examples",
    courseId: 2,
    completed: false,
    dueDate: "2026-01-12",
    priority: "high",
    estimatedTime: 90,
  },
  {
    id: 4,
    title: "Mobile App Wireframing",
    description: "Create wireframes for the mobile app project",
    courseId: 3,
    completed: false,
    dueDate: "2026-01-15",
    priority: "medium",
    estimatedTime: 150,
  },
  {
    id: 5,
    title: "Data Visualization Practice",
    description: "Create charts and graphs using sample data",
    courseId: 5,
    completed: true,
    dueDate: "2026-01-05",
    priority: "low",
    estimatedTime: 100,
  },
  {
    id: 6,
    title: "AI Ethics Reading",
    description: "Read and summarize AI ethics guidelines",
    courseId: 4,
    completed: false,
    dueDate: "2026-01-18",
    priority: "high",
    estimatedTime: 60,
  },
];

export default function TaskManagerPage() {
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, []);

  return (
    <div className="task-page">
      <h1 className="task-title">Task Manager</h1>
      <p className="task-subtitle">Organize and track your learning goals</p>

      <div className="stats-grid">
        <StatCard label="Total Tasks" value={stats.total} icon="📋" />
        <StatCard label="Completed" value={stats.completed} icon="✅" />
        <StatCard label="Pending" value={stats.pending} icon="⏳" />
      </div>
    </div>
  );
}
