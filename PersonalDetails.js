import React from 'react';
import './PersonalDetails.css'; // Import CSS file

const PersonalDetails = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  return (
    <div className="container" style={{ marginTop: '100px' }}> {/* Apply CSS styles */}
      <h2>Personal Details</h2>
      Name:<input type="text" name="name" placeholder="" onChange={handleChange} />
      Age:<input type="number" name="age" placeholder="" onChange={handleChange} /><br></br>
      <label for="gender">Gender:</label>
      <select name="gender" onChange={handleChange}>
        <option value="">select</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select><br></br><br></br>
      Email:<input type="email" name="email" placeholder="" onChange={handleChange} />
      Mobile No.: <input type="tel" name="phoneNo" placeholder="" onChange={handleChange} />
      Username:<input type="text" name="username" placeholder="" onChange={handleChange} /><br></br>
      Add profile photo:<br></br><input type="file" name="profilePicture" onChange={handleFileChange} accept="image/*" />
      <br></br><button onClick={nextStep}>Next</button>
    </div>
  );
};

export default PersonalDetails;
