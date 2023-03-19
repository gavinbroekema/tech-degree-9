'use strict';

const express = require('express');

// Construct a router instance.
const router = express.Router();
const Users = require('./models').Users;

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
router.get('/users', asyncHandler(async (req, res) => {
  let users = await Users.findAll();
  res.json(users);
}));