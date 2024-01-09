import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MyComponent = () => {
  const [year, setYear] = useState(''); // State to store the input year

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleDownloadClick = async () => {
    try {
      // Make an HTTP request to the backend to generate and download the PDF
      const response = await fetch(`http://localhost:5000/generate-pdf/${year}`);
      console.log('Response:', response);
      const blob = await response.blob();
      console.log('Blob:', blob);

      // Create a temporary link element to trigger the download
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'generated-pdf.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <label>
        Enter Year:
        <input type="text" value={year} onChange={handleYearChange} />
      </label>
      <Button className="button" variant="outline-danger" onClick={handleDownloadClick}>
        <b>Download PDF</b>
      </Button>
    </div>
  );
};

export default MyComponent;


