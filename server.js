const express = require("express"); //importing express
const app = express(); //making express object.
const port = process.env.PORT || 5000;
// getting-started.js
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://taskUser:iwillnottellu@cluster0.os32m.mongodb.net/MyDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("hurray! We connected");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/homepage", (req, res) => {
  res.send("Yay!!!!");
});
app.use(express.json());
const userTaskRoute = require("./routes/user_task");
app.use("/userTask", userTaskRoute);
