const express = require('express');
const Heading = require('../models/Heading');

const router = express.Router();

// GET: Fetch latest heading
router.get('/', async (req, res) => {
  try {
    const heading = await Heading.findOne().sort({ updatedAt: -1 });
    if (!heading) {
      return res.status(200).json({ content: 'Default heading text' });
    }
    res.status(200).json(heading);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST: Save a new heading
router.post('/', async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || content.trim() === '') {
      return res.status(400).json({ error: 'Content is required' });
    }

    const newHeading = new Heading({ content });
    await newHeading.save();

    res.status(201).json(newHeading);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
