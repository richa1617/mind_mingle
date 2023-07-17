// Import express
import express from "express";
// Create a server application
const app = express();
// Store the port number in a var
const port = 3001;

// Attach a function to the route "/"
app.get("https://hp-api.onrender.com/api/characters", (req, res) => {
  res.send("Hello world!");
});

// Tell the server to start listening, we provide the port here as the first argument.
// The second argument is a function that runs as soon as the server starts. We use it to log the port number.
app.listen(port, () => console.log(`⚡ Listening on port: ${port}`));
