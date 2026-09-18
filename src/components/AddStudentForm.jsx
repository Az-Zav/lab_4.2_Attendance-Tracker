import React, { useState } from 'react';

const styles = {
  formContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '24px',
  },
  input: {
    flex: 1,
    padding: '12px 14px',
    fontSize: '0.95rem',
    borderRadius: '8px',
    border: '1px solid #cccccc',
    backgroundColor: '#ffffff',
    color: '#212529',
    outline: 'none',
  },
  addButton: {
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#de534e',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
};

export default function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddStudent(name.trim());
    setName('');
  };

  return (
    <form style={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.addButton}>
        Add Student
      </button>
    </form>
  );
}