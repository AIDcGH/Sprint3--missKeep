
export function NotePreview({ note }) {

    return <article className={'note-preview ' + note.isPinned && 'pinned'} style={note.style}> 
        {note.type === 'NoteImg' && <NoteImg />}
        {note.type === 'NoteVideo' && <NoteVideo />}
        <h3>{note.info.title}</h3>
        {note.type === 'NoteTxt' && <NoteTxt />}
        {note.type === 'NoteTodos' && <NoteTodos />}
    </article>

}