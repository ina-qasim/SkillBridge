import React from "react";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="logo">S3</div>
        <span className="brand">SkillBridge</span>
      </div>

      <nav className="nav-links">
        <a href="">Dashboard</a>
        <a href="#">Courses</a>
        <a href="#">Tasks</a>
      </nav>

      <div className="nav-right">
        <div className="user-info">
          <strong>Minabbe</strong>
          <small>minabbe@gmail.com</small>
        </div>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default NavBar;
