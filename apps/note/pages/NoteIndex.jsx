import NotePreview from '../cmps/NotePreview.jsx'

export function NoteIndex({ notes }) {
  return (
    <section className="note-index">
      {notes.map((note) => (
        <NotePreview key={note.id} note={note} />
      ))}
    </section>
  )
}
