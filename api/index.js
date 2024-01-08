import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

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

// User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// User model
const User = mongoose.model("users", userSchema);

// Data schema
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

// Data model
const Data = mongoose.model("datas", dataSchema);

// Multer configuration for file upload
const storage = multer.memoryStorage(); // Store file data in memory
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5 MB
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// User authentication route
app.post("/", async (req, res) => {
  console.log("Request body:", req.body);

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      if (password === user.password) {
        console.log("User exists and password matches");
        res.json("exist");
      } else {
        console.log("User exists but password doesn't match");
        res.json("notexist");
      }
    } else {
      console.log("User not found");
      res.json("notexist");
    }
  } catch (e) {
    console.error("Error:", e);
    res.json("notexist");
  }
});

// Route for handling file uploads
app.post("/uploads", upload.array("images"), async (req, res) => {
  try {
    // Access other form data (type, year, relatedText)
    console.log(req.body);
    const { type, year, title, relatedText, userId } = req.body;

    // Access the array of uploaded files
    const images = req.files.map((file) => {
      return {
        data: file.buffer,
        contentType: file.mimetype,
      };
    });

    // Save the data and image information to the MongoDB database
    const newData = new Data({
      type,
      year,
      title,
      relatedText,
      images,
      userId,
    });

    await newData.save();

    // Send a response with success status and saved data
    res.status(200).json({ status: "success", message: "Data stored successfully", images });

  } catch (error) {
    console.error("Error storing data:", error);

    // Send a response with failure status
    res.status(500).json({ status: "fail", message: "Internal Server Error" });
  }
});

app.post('/poems', async (req, res) => {
  const { year } = req.query;

  try {
    // Assuming you have a "Data" model defined using mongoose
    const poems = await Data.find({ year, type: 'Poems' });

    res.json(poems);
  } catch (error) {
    console.error('Error fetching poems:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/data/:type/:year", async (req, res) => {
  try {
    const { type, year } = req.params;

    // Retrieve data without using populate
    const storedData = await Data.find({
      type: { $regex: new RegExp(`^${type}$`, 'i') },
      year
    });

    if (storedData.length === 0) {
      return res.status(404).json({ status: "fail", message: `No ${type} found for the specified year` });
    }

    const responseData = storedData.map((item) => {
      return {
        _id: item._id,
        title: item.title,
        relatedText: item.relatedText,
        images: item.images.map((image, index) => ({
          data: image.data.toString('base64'), // Convert Buffer to base64
          contentType: image.contentType,
        })),
      };
    });

    res.json(responseData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ status: "fail", message: "Internal Server Error" });
  }
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 