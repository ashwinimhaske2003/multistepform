// src/components/FormPages/AddressDetails.js
import React from 'react';
import './AddressDetails.css';

const AddressDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ marginTop: '100px' }}> {/* Apply container class */}
      <h2>Address Details</h2>
      Current Address: <input type="text" name="currentAddress"  onChange={handleChange} />
      Permanent Address: <input type="text" name="permanentAddress"  onChange={handleChange} />
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default AddressDetails;
