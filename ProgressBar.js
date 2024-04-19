import React from 'react';

const ProgressBar = ({ step, onNext }) => {
  const steps = ['Personal Details', 'Educational Details', 'Address Details', 'Preview'];
  const progress = (step / (steps.length - 1)) * 100;
  const circlePosition = (100 / (steps.length - 1)) * step;

  return (
    <div style={{ position: 'relative', height: '60px', margin: '20px auto', width: '80%' }}>
      <div style={{ backgroundColor: 'pink', height: '4px', width: '100%', borderRadius: '2px', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
        <div style={{ backgroundColor: 'purple', height: '4px', width: `${progress}%`, borderRadius: '2px' }} />
      </div>
      {steps.map((label, index) => (
        <div key={index} style={{ position: 'absolute', left: `${(100 / (steps.length - 1)) * index}%`, bottom: '-30px', textAlign: 'center', width: '100px', color: index <= step ? 'black' : 'black', fontWeight: index === step ? 'bold' : 'normal' }}>{label}</div>
      ))}
      <div style={{ position: 'absolute', top: '50%', left: `${circlePosition}%`, transform: 'translate(-50%, -50%)', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'white', border: '2px solid purple' }} />
    </div>
  );
};

export default ProgressBar;
