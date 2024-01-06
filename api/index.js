import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

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
  username: {
    type: String,
    required: true,
    unique: true,
  },
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
  relatedText: String,
  images: [
    {
      filename: String,
      path: String,
    },
  ],
}, { timestamps: true });

// Data model
const Data = mongoose.model("Data", dataSchema);

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// User authentication route
app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      
      if (password === user.password) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    } else {
      // User not found
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

// Route for handling file uploads
app.post("/upload", upload.array("images"), async (req, res) => {
  try {
    // Access other form data (type, year, relatedText)
    const { type, year, relatedText } = req.body;

    // Access the array of uploaded files
    const images = req.files.map((file) => {
      return {
        filename: file.filename,
        path: file.path,
      };
    });

    // Save the data and image information to the MongoDB database
    const newData = new Data({
      type,
      year,
      relatedText,
      images,
    });

    await newData.save();

    // Remove the uploaded files after processing (optional)
    images.forEach((image) => {
      fs.unlinkSync(image.path);
    });

    res.status(200).json({ message: "Data stored successfully", images });
  } catch (error) {
    console.error("Error storing data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to retrieve stored data (for testing purposes)
app.get("/data", async (req, res) => {
  try {
    const storedData = await Data.find();
    res.json(storedData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
