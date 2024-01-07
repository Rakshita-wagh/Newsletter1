// server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://vaishnavi:vaish@socse.yxckbab.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose model for poems and articles
const poemSchema = new mongoose.Schema({
  title: String,
  content: String,
  year: Number
});

const articleSchema = new mongoose.Schema({
  title: String,
  contents: String,
});

const Poem = mongoose.model('Poem', poemSchema);
const Article = mongoose.model('Article', articleSchema);

// Define routes to get poems and articles
app.get('/api/poems/:year', async (req, res) => {
  const { year } = req.params;
  try {
    const poems = await Poem.find({ year: parseInt(year) });
    res.json(poems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/articles/:year', async (req, res) => {
  const { year } = req.params;
  try {
    const articles = await Article.find({ year: parseInt(year) });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
