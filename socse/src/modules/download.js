import React from 'react';
import { pdf, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

// Styles for PDF pages
const styles = StyleSheet.create({
  pageContainer: {
    
    padding: 20,
  },
  coverPage: {
    textAlign: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  indexPage: {
    textAlign: 'center',
    padding: 20,
  },
  contentPage: {
    padding: 20,
  },
  page: {
    marginTop:20,
    marginBottom:20,
    border: '1px solid #333',

  },
  image: {
    width: 200,
    height: 200,
  },
});

// Additional CSS for UserForm component
const formStyles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    minHeight: '100px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};const MyDocument = ({ formData, pages }) => (
  <pdf>
    {/* Cover Page */}
    <Page style={{ ...styles.page, borderWidth: 2, borderColor: '#333' }}>
      <View style={styles.pageContainer}>
        <Text style={{ fontSize: '20pt' }}>Cover Page</Text>
      </View>
    </Page>

    {/* Index Page */}
    <Page style={{ ...styles.page, borderWidth: 2, borderColor: '#333' }}>
      <View style={styles.pageContainer}>
        <Text style={{ fontSize: '20pt' }}>Index Page</Text>
        <Text>{formData.indexContent}</Text> {/* Display index content */}
      </View>
    </Page>

    {/* Content Pages */}
    {pages.map((page, index) => (
      <Page key={index} style={{ ...styles.page, borderWidth: 2, borderColor: '#333' }}>
        <View style={styles.pageContainer}>
          <Text style={{ fontSize: '20pt' }}>{page.title}</Text>
          <Text>{page.textContent}</Text>
          <Image src={page.imageSrc} style={{ ...styles.image, borderWidth: 1, borderColor: '#333' }} />
        </View>
      </Page>
    ))}
  </pdf>
);



// UserForm component
const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      indexContent: '',
      pages: [
        { title: 'Events', textContent: '', imageSrc: '' },
        { title: 'Literature', textContent: '', imageSrc: '' },
        { title: 'Achievements', textContent: '', imageSrc: '' },
        // Add more pages as needed
      ],
    },
    validationSchema: Yup.object({
      // Add validation schema for other fields as needed
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
          <MyDocument formData={values} pages={values.pages} />,
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
    <div style={formStyles.container}>
      <h2>User Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div id="form-container">
          {/* Form fields */}
          <div style={formStyles.inputContainer}>
            <label style={formStyles.label} htmlFor="indexContent">
              Index Content:
            </label>
            <input
              style={formStyles.input}
              type="text"
              id="indexContent"
              name="indexContent"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.indexContent}
            />
          </div>

          {/* Pages */}
          {formik.values.pages.map((page, pageIndex) => (
            <div key={pageIndex}>
              <h3>{page.title}</h3>
              <div style={formStyles.inputContainer}>
                <label style={formStyles.label} htmlFor={`pages[${pageIndex}].textContent`}>
                  Text Content:
                </label>
                <textarea
                  style={formStyles.textarea}
                  id={`pages[${pageIndex}].textContent`}
                  name={`pages[${pageIndex}].textContent`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={page.textContent}
                />
              </div>
              <div style={formStyles.inputContainer}>
                <label style={formStyles.label} htmlFor={`pages[${pageIndex}].imageSrc`}>
                  Image Source:
                </label>
                <input
                  style={formStyles.input}
                  type="text"
                  id={`pages[${pageIndex}].imageSrc`}
                  name={`pages[${pageIndex}].imageSrc`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={page.imageSrc}
                />
              </div>
            </div>
          ))}
        </div>

        <button style={formStyles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
