require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT;

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("API is running..."));

app.listen(PORT, () => {
  console.log(`Server started on PORT:${PORT}`);
});
