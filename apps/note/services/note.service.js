import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save
}

window.bs = noteService

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            // console.log('notes:', notes)

            if (filterBy.title) {
                const regExp = new RegExp(filterBy.title, 'i')
                notes = notes.filter(note => regExp.test(note.title))
            }
            if (filterBy.minPrice) {
                notes = notes.filter(note => note.listPrice.amount >= filterBy.minPrice)
            }
            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) return storageService.put(NOTE_KEY, note)
    else return storageService.post(NOTE_KEY, note)
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY) || []

    if (notes && notes.length) return

    notes.push(_createNote('NoteTxt', { txt: 'Fullstack Me Baby!' },
        { backgroundColor: '#00d' }, 'pin', 1112221, 'dummyNote1'))

    notes.push(_createNote('NoteImg', { url: 'http://some-img/me', title: 'Bobi and Me' },
        { backgroundColor: '#08d' }, 'basic', 1112222, 'dummyNote2'))

    notes.push(_createNote('NoteTodos', {
        title: 'Get my stuff together', todos: [
            { txt: 'Driving license', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 }
        ]}, undefined, 'bin', 1112223, 'dummyNote3'))

    utilService.saveToStorage(NOTE_KEY, notes)
}

function _createNote(type, info, style = { backgroundColor: '#bbb' },
    placement = 'basic', createdAt = Date.now(), id = utilService.makeId()) {
    return {
        id,
        createdAt,
        type,
        placement,
        info,
        style
    }
}