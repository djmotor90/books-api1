const express = require('express');
const Book = require('../models/book');
const books = express.Router();

// GET index route
books.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET show route
books.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST create route
books.post('/', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update route
books.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE route
books.delete('/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book successfully deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Seed route
books.get('/seed', async (req, res) => {
  try {
    await Book.insertMany([
      // ... seed data
    ]);
    res.status(200).json({ message: 'Seed successful' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = books;
