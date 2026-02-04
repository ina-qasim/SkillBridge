import React from "react";
import NavBar from "./Components/NavBar";
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import Tasks from "./Pages/Tasks";
import StatsCard from "./Components/StatCard";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <StatsCard />
      <Dashboard />
      <Courses />
      <Tasks />
    </div>
  );
};

export default App;
