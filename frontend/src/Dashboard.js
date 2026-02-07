import { useEffect, useState } from "react";
import api from "./api";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("courses/").then(res => setCourses(res.data));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      {courses.map(c => <p key={c.id}>{c.title}</p>)}
    </>
  );
}
