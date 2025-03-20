"use client";

import { useQuery } from "@tanstack/react-query";

const StudentList = () => {
  const fetchAllStudents = async () => {
    const response = await fetch("http://localhost:3000/api/students");
    const data = await response.json();
    return data;
  };

  // Queries
  const query = useQuery({
    queryKey: ["studentsList"],
    queryFn: fetchAllStudents,
  });

  console.log(query.data);

  return (
    <div>
      <p>StudentList</p>
    </div>
  );
};

export default StudentList;
