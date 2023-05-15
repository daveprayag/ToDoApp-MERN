const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "public")));

mongoose
  .connect(
    `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Mongodb Connected..."))
  .catch((err) => console.error(err));

// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));
