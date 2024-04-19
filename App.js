// src/App.js
import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import PersonalDetails from './components/FormPages/PersonalDetails';
import EducationalDetails from './components/FormPages/EducationalDetails';
import AddressDetails from './components/FormPages/AddressDetails';
import Preview from './components/FormPages/Preview';
import Dashboard from './components/FormPages/Dashboard';

const App = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Initialize form data
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 0:
        return <PersonalDetails formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 1:
        return <EducationalDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <AddressDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Preview formData={formData} prevStep={prevStep} nextStep={nextStep} />;
      case 4:
        return <Dashboard formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ProgressBar step={step} />
      {renderFormStep()}
    </div>
  );
};

export default App;
