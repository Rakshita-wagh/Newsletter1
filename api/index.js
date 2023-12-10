import express from 'express';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
dotenv.config();
const uri = 'mongodb+srv://vaishnavi:vaish@socse.yxckbab.mongodb.net/your-database-name?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });
const app =express();
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});