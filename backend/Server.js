const express = require("express");
const app = express();
const cloudinary = require("cloudinary");
const StudentRoute = require("./Routes/Student.Routes");
const conectDataBase = require("./DataBase/database");
const fileUpload = require("express-fileupload");

cloudinary.config({
  cloud_name: "dtxdnaq1z",
  api_key: "598955315229467",
  api_secret: "jiHGbTIC9b8yApmA3Fl-wofEQaE",
});

conectDataBase();
app.use(fileUpload());

app.use("/api/v1", StudentRoute);


app.listen(3000 , () =>{
    console.log("Server listening on " + 3000);
})