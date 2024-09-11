const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use("/api/tasks", taskRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listenning on ${port}`);
});
