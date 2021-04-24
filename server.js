//dependencies

const express = require("express");

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => res.sendFile((__dirname, "view.html")));

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
