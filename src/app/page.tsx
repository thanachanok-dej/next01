import Image from "next/image";
export default function HomePage() {
  const techStack = ["HTML", "CSS", "TypeScript", "Next.js"];

  return (
    <main className="container">
      {/* Hero Box */}
      <section className="home-hero">
        <h1>CSMJU Website</h1>
        <p>ระบบสืบค้นข้อมูลรายวิชาและองค์กรสำหรับการเรียนการสอน</p>
      </section>

      {/* Info Cards */}
      <div className="home-grid">
        <div className="info-card">
          <h3>สรุปข้อมูลระบบ</h3>
          <p className="course-details"><strong>จำนวนรายวิชา:</strong> 3 รายวิชา</p>
          <p className="course-details"><strong>สถานะระบบ:</strong> <span className="status-badge open">เปิดใช้งาน</span></p>
        </div>

        <div className="info-card">
          <h3>เทคโนโลยีที่ใช้พัฒนา</h3>
          <div className="tech-pills">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}