
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
const userSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);
const collection = mongoose.model("collection",userSchema)

module.exports=collection