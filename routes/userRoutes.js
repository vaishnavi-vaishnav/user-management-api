const express = require('express');
const User = require('../models/User');
const router = express.Router();
const mongoose = require('mongoose');

// Middleware to validate ObjectId format
const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: 'Invalid user ID format' });
  }
  next();
};

// Middleware to check for missing fields
const checkRequiredFields = (req, res, next) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  next();
};

// Create User (POST /users)
router.post('/users', checkRequiredFields, async (req, res) => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check for duplicate email
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Validate age type
    if (typeof req.body.age !== 'number') {
      return res.status(400).json({ error: 'Age must be a number' });
    }

    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error creating user: ' + err.message });
  }
});

// Get All Users (GET /users)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving users: ' + err.message });
  }
});

// Get User by ID (GET /users/:id)
router.get('/users/:id', validateObjectId, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving user: ' + err.message });
  }
});

// Update User (PUT /users/:id)
router.put('/users/:id', validateObjectId, checkRequiredFields, async (req, res) => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validate age type
    if (typeof req.body.age !== 'number') {
      return res.status(400).json({ error: 'Age must be a number' });
    }

    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error updating user: ' + err.message });
  }
});

// Delete User (DELETE /users/:id)
router.delete('/users/:id', validateObjectId, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user: ' + err.message });
  }
});

module.exports = router;
