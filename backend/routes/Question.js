const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/QuestionController");
const questionDB = require("../models/Questions/Questions");

router.post("/", QuestionController.createNewQuestion);

module.exports = router;
