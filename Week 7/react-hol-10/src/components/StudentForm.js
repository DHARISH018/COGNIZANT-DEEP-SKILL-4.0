import React, { useState } from 'react';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    course: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'left' }}>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input type="text" name="name" value={student.name} onChange={handleChange} /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" value={student.email} onChange={handleChange} /><br /><br />

        <label>Course:</label><br />
        <input type="text" name="course" value={student.course} onChange={handleChange} /><br /><br />

        <button type="submit">Register</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Course:</strong> {student.course}</p>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
