const questionDB = require("../models/Questions/Questions");
exports.createNewQuestion = async (req, res, next) => {
  try {
    const newQuewstion = await questionDB.create({
      questionName: req.body.questionName,
      questionUrl: req.body.questionUrl,
    });
    return res.status(201).json({
      status: "success",
      data: {
        question: newQuewstion,
      },
    });
  } catch (e) {
    console.log("Some error occured ", e.message);
  }
};
