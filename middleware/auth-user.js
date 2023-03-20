"use strict";
const auth = require("basic-auth");
const { Users } = require("../models");
const bcrypt = require("bcryptjs");

// Middleware to authenticate the request using Basic Authentication.
exports.authenticateUser = async (req, res, next) => {
  let message; // store the message to display
  // Parse the user's credentials from the Authorization header.
  const credentials = auth(req);
<<<<<<< HEAD

  // If the user's credentials are available...
  if (credentials) {
    console.log(credentials)
    // const user = await Users.findOne({ where: { email: credentials.email } });
//     if (user) {
//       const authenticated = bcrypt.compareSync(
//         credentials.pass,
//         user.password
//       );
//       if (authenticated) {
//         console.log(`Authentication successful for username: ${user.email}`);

//         // Store the user on the Request object.
//         req.currentUser = user;
//       } else {
//         message = `Authentication failure for username: ${user.email}`;
//       }
//     } else {
//       message = `User not found for username: ${credentials.email}`;
//     }
//   } else {
//     message = "Auth header not found";
//   }
//   if (message) {
//     console.warn(message);
//     res.status(401).json({ message: 'Access Denied' });
//   } else {
//     next();
=======
//   console.log(credntials);

//   If the user's credentials are available...
  if (credentials) {
    const user = await Users.findOne({ where: { emailAddress: credentials.name } });
    console.log(user.password);
    console.log(credentials.pass);
    console.log(bcrypt.compareSync(
                credentials.pass,
                user.password))
    if (user) {
      const authenticated = bcrypt.compareSync(
        credentials.pass,
        user.password
      );
      if (authenticated) {
        console.log(`Authentication successful for username: ${user.emailAddress}`);

        // Store the user on the Request object.
        req.currentUser = user;
      } else {
        message = `Authentication failure for username: ${user.emailAddress}`;
      }
    } else {
      message = `User not found for username: ${credentials.name}`;
    }
  } else {
    message = "Auth header not found";
  }
  if (message) {
    console.warn(message);
    res.status(401).json({ message: 'Access Denied' });
  } else {
    next();
>>>>>>> tmp
  }
};
