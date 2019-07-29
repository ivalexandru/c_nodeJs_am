const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes
        .find((note) => note.title === title);
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("NOTE NOT FOUND"));
    } //read with this cmd:
} // node app.js read --title="miau"


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    //find() returns undefined if no match found
    // !duplicateNote  aka duplicateNote === undefined
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)


    // daca e > inseamna ca  a note was removed
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse(`${title} removed`))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your notes "));
    notes.forEach((note) => {
        console.log(note.title);
    });

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) //turns json to object
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}