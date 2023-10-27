const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());

// Importing the books controller
const booksController = require('./controllers/books');
app.use('/books', booksController);

// Root index route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connecting to MongoDB and starting the server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.log(err));
