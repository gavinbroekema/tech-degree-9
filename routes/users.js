'use strict';

const express = require('express');

// Construct a router instance.
const router = express.Router();
const { Users } = require('../models');
const { authenticateUser } = require('./middleware/auth-user');


const { authenticateUser } = require('../middleware/auth-user');

// Handler function to wrap each route.
function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      // Forward error to the global error handler
      next(error);
    }
  }
}

// Route that returns a list of users.
<<<<<<< HEAD
=======
// router.get('/', asyncHandler(async (req, res) => {
>>>>>>> tmp
router.get('/', authenticateUser, asyncHandler(async (req, res) => {
  let users = await Users.findAll();
  res.json(users);
}));


// Route that creates a new user.
router.post('/', asyncHandler(async (req, res) => {
    try {
    console.log(req.body)
      await Users.create(req.body);
      res.status(201).json({ "message": "Account successfully created!" });
    } catch (error) {
      console.log('ERROR: ', error.name);
  
      if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
        const errors = error.errors.map(err => err.message);
        res.status(400).json({ errors });   
      } else {
        throw error;
      }
    }
  }));


module.exports = router;

