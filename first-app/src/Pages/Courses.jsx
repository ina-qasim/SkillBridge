import { useState } from "react";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "React.js Fundamentals",
      category: "web",
      image: "https://miro.medium.com/1*NJSv6DGoKTloI8d8im98zg.png",
      description: "Master the basics of React with hands-on projects.",
    },
    {
      id: 2,
      title: "Advanced TypeScript",
      category: "web",
      image: "https://www.ntc.edu/sites/default/files/styles/16_9_1600x900/public/2021-06/web-design-header.jpg?itok=KPytPu7S",
      description: "Deep dive into TypeScript advanced features.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "mobile",
      image: "https://cdn.dribbble.com/userupload/32260677/file/original-f251bbc3ec740db703578eec267bf66b.jpg?format=webp&resize=400x300&vertical=center",
      description: "Build native mobile apps with React Native from scratch.",
    },
  ];

  const categories = ["all", "web", "mobile", "ai", "data"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="courses-container">
      <div className="page-info">
        <h2>Explore Courses</h2>
        <p>Learn new skills from industry experts</p>
      </div>

      <div className="cate-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`btn-cat ${
              selectedCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="btn-enroll">Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
