import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

const styles = {
  pageWrapper: {
    backgroundColor: '#e9ecef',
    minHeight: '100vh',
    padding: '60px 20px',
    boxSizing: 'border-box',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardContainer: {
    width: '100%',
    maxWidth: '520px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '36px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '2rem',
    margin: '0 0 8px 0',
    color: '#212529',
    fontWeight: '700',
  },
  subtext: {
    color: '#6c757d',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    margin: '0 0 20px 0',
  },
  summaryText: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#495057',
    margin: '0 0 20px 0',
  },
  searchInput: {
    width: '100%',
    padding: '12px 14px',
    fontSize: '0.95rem',
    borderRadius: '8px',
    border: '1px solid #cccccc',
    backgroundColor: '#ffffff',
    color: '#212529',
    outline: 'none',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
};

const initialStudents = [
  { id: 1, name: 'Ana Reyes', status: 'Present' },
  { id: 2, name: 'Miguel Santos', status: 'Absent' },
  { id: 3, name: 'Liam Cruz', status: 'Present' },
  { id: 4, name: 'Sofia Bautista', status: 'Present' },
  { id: 5, name: 'Noah Villanueva', status: 'Absent' },
];

export default function App() {
  // 1. Read from localStorage on initial render
  const [students, setStudents] = useState(() => {
    try {
      const savedStudents = localStorage.getItem('attendance_students');
      return savedStudents ? JSON.parse(savedStudents) : initialStudents;
    } catch (error) {
      return initialStudents;
    }
  });

  const [searchTerm, setSearchTerm] = useState('');

  const getNextId = () => {
    if (students.length === 0) return 1;
    return Math.max(...students.map((s) => s.id)) + 1;
  };


  useEffect(() => {
    localStorage.setItem('attendance_students', JSON.stringify(students));
  }, [students]);

  const toggleStatus = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student.id === id) {
          return {
            ...student,
            status: student.status === 'Present' ? 'Absent' : 'Present',
          };
        }
        return student;
      })
    );
  };

  const handleAddStudent = (name) => {
    const newStudent = {
      id: getNextId(),
      name,
      status: 'Present',
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const presentCount = students.filter((s) => s.status === 'Present').length;

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.cardContainer}>
        <h1 style={styles.heading}>Attendance Register</h1>
        <p style={styles.subtext}>
          Track classroom attendance, filter students, and append new entries.
        </p>

        <p style={styles.summaryText}>
          {presentCount} of {students.length} students present today
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />

        {/* Add Student Form */}
        <AddStudentForm onAddStudent={handleAddStudent} />

        {/* Student List */}
        <StudentList
          students={filteredStudents}
          onToggleStatus={toggleStatus}
        />
      </div>
    </div>
  );
}

