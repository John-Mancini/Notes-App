//dependencies

const express = require("express");

// Sets up the Express App

const app = express();
const PORT = 3000;
const Log = require("./db/log");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let data = [
  {
    title: "a",
    id: 0,
    text: "b",
  },
  {
    title: "c",
    id: 1,
    text: "d",
  },
];
// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));

app.get("/notes", (req, res) => res.sendFile(__dirname + "/public/notes.html"));

app.delete("/api/notes/:id", (req, res) => {
  console.log("params", req.params);
  // use the params id to find the item in my data and remove it.
  res.json([{ title: "title", text: "text" }]);
});

app.get("/api/notes", (req, res) => {
  Log.readNotes().then((notes) => res.json(notes));
});

app.post("/api/notes", (req, res) => {
  console.log("body", req.body);
});
// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
