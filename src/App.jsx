import { useState } from "react";
import StudentCard from "./components/StudentCard";
import RegisterCourse from "./components/RegisterCourse";

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Database Systems",
      credits: 6,
      grade: 8,
      attending: true,
      difficulty: "Moderate",
    },
    {
      id: 2,
      name: "Operating Systems",
      credits: 5,
      grade: 9,
      attending: true,
      difficulty: "Hard",
    },
    {
      id: 3,
      name: "Web Development",
      credits: 4,
      grade: 10,
      attending: true,
      difficulty: "Easy",
    },
  ]);

  return (
      <div>
        <h1>Full Name:Erina Dalipi</h1>
        <h2>Student ID: 132537</h2>
        <p>These are my enrolled courses for this semester:</p>

        {courses.map((course) => (
            <StudentCard key={course.id} course={course} />
        ))}

        <RegisterCourse courses={courses} setCourses={setCourses} />
      </div>
  );
}

export default App;