const fs = require("fs");

// Package used to generate unique ids from "https://www.npmjs.com/package/uniqid"
const uniqid = require("uniqid");

const util = require("util");

//convert a method that returns responses using a callback function to return responses in a promise object
const readFile = util.promisify(fs.readFile);

const writeFile = util.promisify(fs.writeFile);

class Log {
  //reading the file from the db.json using utf8 encoding
  read() {
    return readFile("/db/db.json", "utf8");
  }
  // writing the file to db.json using JSON.stringify
  write(notes) {
    return writeFile("/db/db.json", JSON.stringify(notes));
  }

  readNotes() {
    return this.read().then((notes) => {
      let notesArr;

      // try to take the notes and combine them into an array and if it doesnt work then return an empty array

      try {
        notesArr = [].concat(JSON.parse(notes));
      } catch (err) {
        notesArr = [];
      }
      return notesArr;
    });
  }
}
module.exports = new Log();
