import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

const YourFormComponent = () => {
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [relatedText, setRelatedText] = useState("");
  const [images, setImages] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Key for resetting file input

  const handleImageChange = (e) => {
    const files = e.target.files;
    setImages([...images, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are empty
    if (!type || !year) {
      console.error("Type and Year are required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("type", type);
      formData.append("year", year);

      // Only append optional fields if they are not empty
      if (title) formData.append("title", title);
      if (relatedText) formData.append("relatedText", relatedText);

      images.forEach((image, index) => {
        formData.append("images", image);
      });

      // Assuming you have an API endpoint for storing data on your backend
      const response = await axios.post("http://localhost:8000/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Data stored successfully:", response.data);

      // Set submission status to display alert
      setSubmissionStatus("success");

      // Clear form fields
      setType("");
      setYear("");
      setTitle("");
      setRelatedText("");
      setImages([]);
      // Reset file input by updating key
      setFileInputKey(Date.now());

    } catch (error) {
      console.error("Error storing data:", error);
      // Set submission status to display alert
      setSubmissionStatus("error");
    }
  };

  return (
    <Container className="mt-5 p-4" style={{ background: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2 className="text-center mb-4">Data Input Form</h2>
      
      {/* Display alert based on submission status */}
      {submissionStatus === "success" && (
        <Alert variant="success" onClose={() => setSubmissionStatus(null)} dismissible>
          Data submitted successfully!
        </Alert>
      )}
      {submissionStatus === "error" && (
        <Alert variant="danger" onClose={() => setSubmissionStatus(null)} dismissible>
          Error submitting data. Please try again.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formType">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formYear">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formRelatedText">
          <Form.Label>Related Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter related text"
            value={relatedText}
            onChange={(e) => setRelatedText(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formImages">
          <Form.Label>Upload Images</Form.Label>
          <Form.Control
            key={fileInputKey} // Reset key to reset file input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default YourFormComponent;
