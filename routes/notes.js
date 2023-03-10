const notes = require('express').Router();
//id package
const { v4: uuidv4 } = require('uuid');
//import helpers from fs util
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//get
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//post
notes.post('/', (req, res) => {
    //breakdown incoming request
    const { title, text } = req.body;

    //verify there is a body or error out
    if (req.body) {
        // make note object
        const note = {
            title,
            text,
            id: uuidv4()
        };

        //pass note into db
        readAndAppend(note, './db/db.json');
        res.json(`Note added`);
    } else {
        res.error('Error');
    }
});

module.exports = notes;