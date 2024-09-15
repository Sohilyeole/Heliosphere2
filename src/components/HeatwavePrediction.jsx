import React from 'react';

function HeatwavePrediction({ prediction }) {
  if (!prediction) {
    return <p>Predicting heatwave...</p>;
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Heatwave Prediction</h2>
      
      <p>{prediction>30? `Heatwave is likely to occur!  chance : ${prediction}%` : `No heatwave expected. chance : ${prediction}%`}</p>
      
    </div>
  );
}

export default HeatwavePrediction;
