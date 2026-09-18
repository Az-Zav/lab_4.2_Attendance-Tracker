import React from 'react';
import StudentCard from './StudentCard';

export default function StudentList({ students, onToggleStatus }) {
  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
}