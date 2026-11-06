const {body}=require("express-validator")

const requestValidator=[
  body('email').isString().trim().isEmpty()
  .withMessage('Email field cant be empty').
  isEmail().withMessage("Provide valid email"),

  body('password').isString().withMessage("password require to be a String"),
  isEmpty().withMessage("Cant be empty")
]

const loginValidate=[
  
]