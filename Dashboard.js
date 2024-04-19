import React from 'react';
import './Dashboard.css';

const Dashboard = ({ formData, backToForm }) => {
  const storedData = JSON.parse(localStorage.getItem('formData'));

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Field</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{storedData.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{storedData.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{storedData.gender}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{storedData.email}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{storedData.phoneNo}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{storedData.username}</td>
          </tr>
          <tr>
            <td>Profile Photo</td>
            <td><img src={formData.ProfilePicture} alt="Profile" /></td>
          </tr>
          <tr>
            <td>SSC Marks</td>
            <td>{storedData.sscMarks}</td>
          </tr>
          <tr>
            <td>SSC Passing Year</td>
            <td>{storedData.sscPassingYear}</td>
          </tr>
          <tr>
            <td>HSC Marks</td>
            <td>{storedData.hscMarks}</td>
          </tr>
          <tr>
            <td>HSC Passing Year</td>
            <td>{storedData.hscPassingYear}</td>
          </tr>
          <tr>
            <td>UG Course</td>
            <td>{storedData.ugCourse}</td>
          </tr>
          <tr>
            <td>Branch</td>
            <td>{storedData.branch}</td>
          </tr>
          <tr>
            <td>UG Passing Year</td>
            <td>{storedData.ugPassingYear}</td>
          </tr>
          <tr>
            <td>UG CGPA</td>
            <td>{storedData.ugCGPA}</td>
          </tr>
          <tr>
            <td>Current Address</td>
            <td>{storedData.currentAddress}</td>
          </tr>
          <tr>
            <td>Permanent Address</td>
            <td>{storedData.permanentAddress}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={backToForm}>Back to Registration Form</button>
    </div>
  );
};

export default Dashboard;
