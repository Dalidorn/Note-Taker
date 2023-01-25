const notes = require('express').Router();

//import helpers from fs util
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');

//get
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//post

module.exports = notes;