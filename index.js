import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(`${process.env.MONGO_URL}/mongo05`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log('error :', error));
db.once('open', () => console.log('db connected'));

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);
