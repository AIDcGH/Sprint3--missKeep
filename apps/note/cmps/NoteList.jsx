import { NotePreview } from "./NotePreview.jsx"

export function NoteList({ notes, onPinNote, onColorNote, onBinNote }) {
    return <section className='note-list'>
        <ul>
            {notes.map(note =>
                <li key={note.id}>
                    <NotePreview
                        note={note}
                        onPinNote={onPinNote}
                        onColorNote={onColorNote}
                        onBinNote={onBinNote}
                    />
                </li>
            )}
        </ul>
    </section>
}
