
import NoteTxt from './NoteTypes/NoteTxt.jsx'
import NoteImg from './NoteTypes/NoteImg.jsx'
import NoteVideo from './NoteTypes/NoteVideo.jsx'
import NoteTodos from './NoteTypes/NoteTodos.jsx'

export function NotePreview({ note }) {

    return <article className={'note-preview ' + note.isPinned && 'pinned'} style={note.style}> 
        {note.type === 'NoteImg' && <NoteImg info={note.info} />}
        {note.type === 'NoteVideo' && <NoteVideo info={note.info} />}
        <h3>{note.info.title}</h3>
        {note.type === 'NoteTxt' && <NoteTxt info={note.info} />}
        {note.type === 'NoteTodos' && <NoteTodos info={note.info} />}
    </article>

}