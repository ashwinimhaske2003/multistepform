// src/components/FormPages/EducationalDetails.js
import React from 'react';
import './EducationalDetails.css';
const EducationalDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  return (
    <div className="container" style={{ marginTop: '100px' }}> 
      <h2>Educational Details</h2>
      SSC Marks: <input type="number" name="sscMarks"  onChange={handleChange} />
      SSc passing year: <input type="number" name="sscPassingYear"  onChange={handleChange} />
      HSC Marks: <input type="number" name="hscMarks"  onChange={handleChange} />
      HSC Passing year: <input type="number" name="hscPassingYear"  onChange={handleChange} />
      UG Course: <input type="text" name="ugCourse"  onChange={handleChange} />
      UG Branch:<input type="text" name="branch"  onChange={handleChange} />
      UG passing Year: <input type="number" name="ugPassingYear"  onChange={handleChange} />
      CGPA:<input type="number" name="ugCGPA"  onChange={handleChange} />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default EducationalDetails;
