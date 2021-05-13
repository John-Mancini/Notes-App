# Notes-App
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column

The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).

This notes app is fully functional it can save and delete notes and you can change which notes are being viewed by clicking on the notes title.
