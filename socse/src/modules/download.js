import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';



// PDF template component
const MyDocument = ({ formData }) => (
  <pdf>
    <Page size="A4">
      <View style={styles.section}>
        <Text>Name: {formData.name}</Text>
        <Text>Email: {formData.email}</Text>
        {/* Add more fields as needed */}
      </View>
    </Page>
  </pdf>
);

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// UserForm component
const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      // Add more fields as needed
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      // Add more validations as needed
    }),
    onSubmit: async (values) => {
      try {
        // Convert the form to an image using html2canvas
        const canvas = await html2canvas(document.getElementById('form-container'));
        const imgData = canvas.toDataURL('image/png');

        // Convert data URL to Blob
        const blob = await dataURLtoBlob(imgData);

        // Generate a PDF using the provided template and the form image
        const pdfBlob = await pdf(
          <MyDocument formData={values} />,
          { width: 800, height: 1200 } // Adjust the width and height as needed
        ).toBlob();

        // Create a Blob from the PDF and save it
        saveAs(pdfBlob, 'filled_application.pdf');
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  // Utility function to convert data URL to Blob
  const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: 'image/png' });
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div id="form-container">
          {/* Form fields */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: 'red' }}>{formik.errors.name}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Add more fields as needed */}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
