const axios = require("axios");
const express = require("express");

const app = express();

// Define the URL of your website
const websiteUrl = "https://backend-i4i8.onrender.com/";

// Function to make a request to your website
const openWebsite = async () => {
  try {
    const response = await axios.get(websiteUrl);
    console.log(`Website opened successfully at ${new Date()}`);
  } catch (error) {
    console.error(`Error opening website: ${error.message}`);
  }
};

// Interval in milliseconds (40 seconds in this case)
const interval = 40 * 1000;

// Start opening the website at regular intervals
const timer = setInterval(openWebsite, interval);

// Log when the script starts
console.log("Script started. Opening website every 40 seconds.");

// Route to handle GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Script is running and periodically opening the website.");
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
