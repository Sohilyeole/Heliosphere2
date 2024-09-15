import React from 'react';

const About = () => {
  const powerBIEmbedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNDZiMjM1MDktMDAxZi00ZWVmLWE5NGEtOTliMjA1MDAxMDUxIiwidCI6IjI4ZDg1ZTFlLTI3ODktNDM2OC04NmZiLWU5M2Q1YjJjMmY0MSJ9'; // Replace with your embed URL
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Heatwave Predictor</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            The Heatwave Predictor is an advanced tool designed to provide accurate and timely predictions of heatwaves across India. Using cutting-edge AI and ML technologies, our application aims to help individuals and communities prepare for extreme weather conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Problem Statement</h2>
          <p>
            Heatwaves are becoming increasingly common and severe due to climate change. Early prediction of these events can save lives and reduce the impact on public health, agriculture, and infrastructure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p>
            Our application uses a combination of machine learning models trained on historical weather data to predict the likelihood of a heatwave occurring in the next 24 hours. The predictions are location-specific and take into account various meteorological factors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            <li>Location-based heatwave predictions.</li>
            <li>Real-time weather updates and alerts.</li>
            <li>Interactive chatbot for queries and guidance.</li>
            <li>User-friendly interface with dynamic 3D visuals.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Team</h2>
          <p>
            Our team consists of passionate developers and data scientists dedicated to creating impactful tools for the community. 
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            Have feedback or need support? Reach out to us at <a href="mailto:info@heatwavepredictor.com" className="text-blue-500">info@heatwavepredictor.com</a>.
          </p>
        </section>
      </div>
    </div>
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
    //   <iframe
    //     title="Power BI Report"
    //     width="1000"
    //     height="500"
    //     src={powerBIEmbedUrl}
    //     frameBorder="0"
    //     allowFullScreen="true"
    //     className="rounded-lg shadow-lg"
    //   ></iframe>
    // </div>

  );
}

export default About;
