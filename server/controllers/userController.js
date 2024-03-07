const User = require('../models/userModel');

const userController = {};

userController.createUser = (req,res,next) => {
  const {username, password} = req.body

  const newUser = {
    username,
    password
  }
  User
    .create(newUser)
    .then((result) => next())
    .catch((err) => next(err))

}

userController.verifyUser = (req, res, next) => {

  const {username, password} = req.body

  User.find({
    username,
    password
  })
    .then((result) => {
      if (result[0]) {
        return next();
      } else {
        res.redirect('/signup')
        return next();
      }
    })

  
};

module.exports = userController;