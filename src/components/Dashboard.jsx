import React from 'react';

const Dashboard = () => {
  const powerBIEmbedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNDZiMjM1MDktMDAxZi00ZWVmLWE5NGEtOTliMjA1MDAxMDUxIiwidCI6IjI4ZDg1ZTFlLTI3ODktNDM2OC04NmZiLWU5M2Q1YjJjMmY0MSJ9'; // Replace with your embed URL
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <iframe
        title="Power BI Report"
        width="1000"
        height="500"
        src={powerBIEmbedUrl}
        frameBorder="0"
        allowFullScreen="true"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>

  );
}

export default Dashboard;

