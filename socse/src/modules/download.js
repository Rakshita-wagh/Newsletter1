import React from 'react';
import { pdf, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

// Styles for PDF pages
const styles = StyleSheet.create({
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
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

// PDF template component
const MyDocument = ({ formData, pages }) => (
  <pdf>
    {/* Cover Page */}
    <Page style={styles.coverPage}>
      <View>
        <Text>Cover Page</Text>
      </View>
    </Page>

    {/* Index Page */}
    <Page style={styles.indexPage}>
      <View>
        <Text>Index Page</Text>
        <Text>{formData.indexContent}</Text> {/* Display index content */}
      </View>
    </Page>

    {/* Content Pages */}
    {pages.map((page, index) => (
      <Page key={index} style={styles.page}>
        <View>
          <Text>{page.title}</Text>
          <Text>{page.textContent}</Text>
          <Image src={page.imageSrc} style={styles.image} />
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
        { title: 'Page 1', textContent: '', imageSrc: '' },
        { title: 'Page 2', textContent: '', imageSrc: '' },
        { title: 'Page 3', textContent: '', imageSrc: '' },
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
    <div>
      <h2>User Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div id="form-container">
          {/* Form fields */}
          <div>
            <label htmlFor="indexContent">Index Content:</label>
            <input
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
              <div>
                <label htmlFor={`pages[${pageIndex}].textContent`}>Text Content:</label>
                <textarea
                  id={`pages[${pageIndex}].textContent`}
                  name={`pages[${pageIndex}].textContent`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={page.textContent}
                />
              </div>
              <div>
                <label htmlFor={`pages[${pageIndex}].imageSrc`}>Image Source:</label>
                <input
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
