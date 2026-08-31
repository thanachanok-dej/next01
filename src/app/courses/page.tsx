import CourseCard from "../components/CourseCard";
import { Course } from "../types/Course";
import { Coursesdata } from "../data/coursesdata";
export default function CoursesPage() {
  
  return (
    <>
      <div>
        {Coursesdata.map((course , index) =>(
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </>
  );
}
