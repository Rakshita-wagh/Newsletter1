import express from 'express';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
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
app.use(express.json());
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);