import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const YourFormComponent = () => {
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [relatedText, setRelatedText] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    setImages([...images, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("type", type);
      formData.append("year", year);
      formData.append("relatedText", relatedText);

      images.forEach((image, index) => {
        formData.append(`image${index + 1}`, image);
      });

      // Assuming you have an API endpoint for storing data on your backend
      const response = await axios.post("http://localhost:8000", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Data stored successfully:", response.data);

      // You can perform additional actions after successful storage
    } catch (error) {
      console.error("Error storing data:", error);
      // Handle the error (show a message, etc.)
    }
  };

  return (
    <Container className="mt-5 p-4" style={{ background: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h2 className="text-center mb-4">Data Input Form</h2>
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
