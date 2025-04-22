
import { NoteTxt } from './NoteTypes/NoteTxt.jsx'
import { NoteImg } from './NoteTypes/NoteImg.jsx'
import { NoteVideo } from './NoteTypes/NoteVideo.jsx'
import { NoteTodos } from './NoteTypes/NoteTodos.jsx'

export function NotePreview({ note, onPinNote, onColorNote, onBinNote }) {

    return <article className='note-preview' style={note.style}>
        <button className={'pin-btn ' + note.type} onClick={() => onPinNote(note)} title='pin'></button>
        {note.type === 'NoteImg' && <NoteImg info={note.info} />}
        {note.type === 'NoteVideo' && <NoteVideo info={note.info} />}
        <h3>{note.info.title}</h3>
        {note.type === 'NoteTxt' && <NoteTxt info={note.info} />}
        {note.type === 'NoteTodos' && <NoteTodos info={note.info} />}
        <button className='color-btn' onClick={() => onColorNote(note)} title='pin'></button>
        <button className='bin-btn' onClick={() => onBinNote(note)} title='pin'></button>
    </article>

}