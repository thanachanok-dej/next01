import { Course } from "../types/Course";
type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card">
      <h2 className="course-title">{course.title}</h2>
      
      <div className="course-details">
        <p className="course-code"><strong>รหัสวิชา:</strong> {course.code}</p>
        <p className="course-credits"><strong>หน่วยกิต:</strong> {course.credits} หน่วยกิต</p>
      </div>

      <div className="course-status-wrapper">
        <span className={`status-badge ${course.isOpen ? "open" : "closed"}`}>
          {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
        </span>
      </div>
    </article>
  );
}