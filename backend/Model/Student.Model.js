const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  city: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  courses: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  fullName: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  fatherName: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  email: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  phone: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  cnic: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  fathersCnic: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  dateOfbirth: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  gender: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  address: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  qualification: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  laptop: {
    type: String,
    required: [true, "Please Fill this feild"],
  },
  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

const StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel;
