const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./sequelize");
const ratingRoutes = require("./routes/rating");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use("/api", ratingRoutes);

// Test the database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
