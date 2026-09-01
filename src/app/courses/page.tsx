import CourseCard from "../components/CourseCard";
import { Course } from "../types/Course";
import { Coursesdata } from "../data/coursesdata";
export default function CoursesPage() {
  
  return (
    <main className="container">
      <h1>รายการวิชา</h1>
      <div className="courses-container">
        {Coursesdata.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}