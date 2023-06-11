const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const conectDataBase = () => {
  mongoose
    .connect(
      "mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then((data) => {
      console.log(`MongoDB Connected With Server ${data.connection.host}`);
    });
};

module.exports = conectDataBase;
