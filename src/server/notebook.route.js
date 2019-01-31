const express = require("express");
const notebookRoute = express.Router();

// let notebook = require('./notebook.model');

//Define Routes for Notebook
notebookRoute.get("/viewBooks", () => {
  console.log("Getting notebooks");
});

notebookRoute.post("/createBook", () => {
  console.log("Creating notebook");
});

notebookRoute.post("/updateBook", () => {
  console.log("updating notebook");
});

notebookRoute.delete("/deleteBook", () => {
  console.log("Getting notebooks");
});
