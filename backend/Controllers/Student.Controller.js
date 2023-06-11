const StudentModel = require("../Model/Student.Model");

const createStudent = async (req, res) => {
  const student = await StudentModel.create(req.body);

  res.status(200).send({
    success: true,
    student,
    imagesLinks,
  });
};

module.exports = {
  createStudent,
};
