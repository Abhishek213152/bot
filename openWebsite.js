const axios = require("axios");
const { setInterval } = require("timers");

// Define the URL of your website
const websiteUrl = "https://front-render-eakv.onrender.com/";

// Function to make a request to your website
const openWebsite = async () => {
  try {
    const response = await axios.get(websiteUrl);
    console.log(`Website opened successfully at ${new Date()}`);
  } catch (error) {
    console.error(`Error opening website: ${error.message}`);
  }
};

// Interval in milliseconds (2 minutes in this case)
const interval = 2 * 60 * 1000;

// Start opening the website at regular intervals
const timer = setInterval(openWebsite, interval);

// Log when the script starts
console.log("Script started. Opening website every 2 minutes.");
