import React, { useState } from 'react';
import './Preview.css';

const Preview = ({ formData, prevStep, nextStep }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({ ...formData });
  

  const handleSubmit = () => {
    
    localStorage.setItem('formData', JSON.stringify(editedData));
    
    nextStep();
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    
    setEditedData({ ...formData });
  };

  const handleSaveChanges = () => {
    
    console.log('Edited Data:', editedData);
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleFileChange = (e) => {
    setEditedData({ ...editedData, profilePicture: URL.createObjectURL(e.target.files[0]) });
  };
  
 

  return (
    <div className="container" style={{ marginTop: '100px' }}> {}
      <h2>Preview</h2>
      <p>Name: {editMode ? <input type="text" name="name" value={editedData.name} onChange={handleChange} /> : formData.name}</p>
      <p>Age: {editMode ? <input type="text" name="age" value={editedData.age} onChange={handleChange} /> : formData.age}</p>
      <p>Gender: {editMode ? <input type="text" name="gender" value={editedData.gender} onChange={handleChange} /> : formData.gender}</p>
      <p>Phone Number: {editMode ? <input type="text" name="phoneNo" value={editedData.phoneNo} onChange={handleChange} /> : formData.phoneNo}</p>
      <p>Username: {editMode ? <input type="text" name="username" value={editedData.username} onChange={handleChange} /> : formData.username}</p>
      <p>Profile Photo: {editMode ? <input type="file" name="profilePicture" onChange={handleFileChange} /> : <img src={formData.profilePicture} alt="Profile" />}</p>
      <p>SSC Marks: {editMode ? <input type="text" name="sscMarks" value={editedData.sscMarks} onChange={handleChange} /> : formData.sscMarks}</p>
      <p>SSC Passing Year: {editMode ? <input type="text" name="sscPassingYear" value={editedData.sscPassingYear} onChange={handleChange} /> : formData.sscPassingYear}</p>
      <p>HSC Marks: {editMode ? <input type="text" name="hscMarks" value={editedData.hscMarks} onChange={handleChange} /> : formData.hscMarks}</p>
      <p>HSC Passing Year: {editMode ? <input type="text" name="hscPassingYear" value={editedData.hscPassingYear} onChange={handleChange} /> : formData.hscPassingYear}</p>
      <p>UG Course: {editMode ? <input type="text" name="ugCourse" value={editedData.ugCourse} onChange={handleChange} /> : formData.ugCourse}</p>
      <p>Branch: {editMode ? <input type="text" name="branch" value={editedData.branch} onChange={handleChange} /> : formData.branch}</p>
      <p>UG Passing Year: {editMode ? <input type="text" name="ugPassingYear" value={editedData.ugPassingYear} onChange={handleChange} /> : formData.ugPassingYear}</p>
      <p>UG CGPA: {editMode ? <input type="text" name="ugCGPA" value={editedData.ugCGPA} onChange={handleChange} /> : formData.ugCGPA}</p>
      <p>Current Address: {editMode ? <input type="text" name="currentAddress" value={editedData.currentAddress} onChange={handleChange} /> : formData.currentAddress}</p>
      <p>Permanent Address: {editMode ? <input type="text" name="permanentAddress" value={editedData.permanentAddress} onChange={handleChange} /> : formData.permanentAddress}</p>

      {/* other fields */}
      
      {editMode ? (
        <>
          <button onClick={handleSaveChanges}>Save Changes</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={prevStep}>Previous</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleSubmit}>Submit</button>
          
          
        </>
      )}
    </div>
  );
};

export default Preview;
