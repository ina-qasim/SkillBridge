import React from "react";
import StatCard from "../Components/StatCard";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <h1>
        Welcome back, <span>Minabbe</span>
      </h1>
      <p>Continue your learning journey and manage your tasks</p>

      <div className="stats-grid">
        <StatCard icon="📘" title="Courses Enrolled" value="1" color="purple" />
        <StatCard icon="✅" title="Tasks Completed" value="3" color="green" />
        <StatCard icon="🔥" title="Current Streak" value="7" color="orange" />
        <StatCard icon="📅" title="Upcoming" value="2" color="blue" />
      </div>
    </main>
  );
};

export default Dashboard;
