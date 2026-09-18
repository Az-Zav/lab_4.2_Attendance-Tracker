import React from 'react';

const styles = {
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '16px 0',
    borderBottom: '1px solid #e9ecef',
    boxSizing: 'border-box',
  },
  nameWrapper: {
    flex: '1 1 auto',
    minWidth: 0,
    paddingRight: '12px',
    textAlign: 'left',
  },
  nameText: {
    fontSize: '1rem',
    color: '#212529',
    fontWeight: '600',
    lineHeight: '1.3',
    wordBreak: 'break-word',
    display: 'inline-block',
    textAlign: 'left',
  },
  statusWrapper: {
    flex: '0 0 80px',
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: '0 0 110px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  actionButton: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #cccccc',
    backgroundColor: '#ffffff',
    color: '#343a40',
    fontSize: '0.85rem',
    fontWeight: '500',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
  },
};

export default function StudentCard({ student, onToggleStatus }) {
  const isPresent = student.status === 'Present';

  const statusTextStyle = {
    fontWeight: '500',
    fontSize: '0.9rem',
    color: isPresent ? '#2e7d32' : '#de534e',
  };

  return (
    <div style={styles.cardContainer}>
      <div style={styles.nameWrapper}>
        <strong style={styles.nameText}>
          #{student.id} {student.name}
        </strong>
      </div>

      <div style={styles.statusWrapper}>
        <span style={statusTextStyle}>{student.status}</span>
      </div>

      <div style={styles.buttonWrapper}>
        <button
          style={styles.actionButton}
          onClick={() => onToggleStatus(student.id)}
        >
          Mark {isPresent ? 'absent' : 'present'}
        </button>
      </div>
    </div>
  );
}