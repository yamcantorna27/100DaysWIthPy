const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

//Database
mongoose.connect("mongodb://127.0.0.1:27017/journalDB");

const recordSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: String,
  content: String
});

const Record = mongoose.model('Record',recordSchema);

app.use(express.static("public"));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.render("main");
});


app.listen(3000, () => {
  console.log("Server is up and running at port 3000");
});
