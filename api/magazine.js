import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { PDFDocument, StandardFonts } from 'pdf-lib';

const app = express();
const PORT = 5000;

// Connect to MongoDB
dotenv.config();

// MongoDB connection
const uri = 'mongodb+srv://vaishnavi:vaish@socse.yxckbab.mongodb.net/your-database-name?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });
  const dataSchema = new mongoose.Schema({
  type: String,
  year: String,
  title: String,
  relatedText: String,
  images: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
}, { timestamps: true });

const Data = mongoose.model('Data', dataSchema);

app.get('/generate-pdf/:year', async (req, res) => {
  const { year } = req.params;

  try {
    // Fetch data from the database based on the input year
    const eventData = await Data.find({ type: 'events', year });
    const sportsData = await Data.find({ type: 'sports', year });
    // Repeat for other sections

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add sections to the PDF
    await addSectionToPDF(pdfDoc, 'Events', eventData);
    await addSectionToPDF(pdfDoc, 'Sports', sportsData);
    // Repeat for other sections

    // Save the PDF to a buffer
    const pdfBytes = await pdfDoc.save();

    // Send the PDF as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdfBytes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

async function addSectionToPDF(pdfDoc, sectionTitle, sectionData) {
    // Add section title to the first page of the document
    const firstPage = pdfDoc.addPage();
    const titleText = await firstPage.drawText(sectionTitle, {
      x: 50,
      y: firstPage.getHeight() - 50, // Use firstPage.getHeight() for the page height
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      fontSize: 14,
    });
  
    // Add section data to the PDF
    for (const item of sectionData) {
      const text = `${item.title}: ${item.relatedText}`;
      const dataText = await firstPage.drawText(text, {
        x: 50,
        y: titleText.y - 20,
        font: await pdfDoc.embedFont(StandardFonts.Helvetica),
        fontSize: 12,
      });
  
      // Add images to the PDF (you may need to adjust this based on the PDF library used)
      for (const image of item.images) {
        const imageEmbed = await pdfDoc.embedPng(image.data);
        const imageXObject = await pdfDoc.createXObjectFromImage(imageEmbed);
        const { width, height } = imageXObject.scale(0.5);
  
        await firstPage.drawImage(imageXObject, {
          x: dataText.x + dataText.width,
          y: dataText.y - height,
          width,
          height,
        });
      }
    }
  }
  
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//hello how are you