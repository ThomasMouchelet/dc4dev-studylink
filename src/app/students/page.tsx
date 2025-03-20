import StudentList from "@/components/app/student/StudentList";
import Link from "next/link";

export default function StudentsPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>StudentsPage</h1>

      <StudentList />
    </div>
  );
}
