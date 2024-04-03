import React, { useState } from "react";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation check
    const isFormValid = Object.values(student).every(
      (val) => val.trim() !== ""
    );
    if (isFormValid) {
      console.log(student); // Process the form data
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="name"
            value={student.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentEmail" className="form-label">
            Student Email
          </label>
          <input
            type="email"
            className="form-control"
            id="studentEmail"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={student.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <select
            className="form-select"
            id="department"
            name="department"
            value={student.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
          </select>
        </div>
        <fieldset className="mb-3">
          <p>Year of Study</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="year"
              id="year1"
              value="1"
              checked={student.year === "1"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="year1">
              1st Year
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="year"
              id="year2"
              value="2"
              checked={student.year === "2"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="year2">
              2nd Year
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="year"
              id="year3"
              value="3"
              checked={student.year === "3"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="year3">
              3rd Year
            </label>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
