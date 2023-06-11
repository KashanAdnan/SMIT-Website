const express = require("express");
const StudentContorller = require("../Controllers/Student.Controller");
const StudentRoute = express.Router();

StudentRoute.post("/register", StudentContorller.createStudent);

module.exports = StudentRoute;
