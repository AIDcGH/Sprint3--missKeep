import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/NoteList.jsx'

const { useState, useEffect } = React

export function NoteIndex() {
	const [notes, setNotes] = useState()
	const [filterBy, setFilterBy] = useState({ expression: '', type: '' })

	useEffect(() => {
		loadNotes()
	}, [])

	function loadNotes() {
		noteService.query().then(setNotes)
	}

	function onAddNote(note) {
		noteService.save(note).then(loadNotes)
	}

	function onBinNote(note) {
		noteService.save({ ...note, placement: 'bin' }).then(loadNotes)
	}

	function onPinNote(note) {
		const updatedNote = { ...note, placement: 'pin' ? 'main' : 'pin' }
		noteService.save(updatedNote).then(loadNotes)
	}

	function onColorNote(note, color) {
		const updatedNote = { ...note, style: { ...note.style, backgroundColor: color } }
		noteService.save(updatedNote).then(loadNotes)
	}

	function notesFilter(notes, filterBy) {
		let filtered = notes.filter(note => note.placement !== 'bin')
		const regex = new RegExp(filterBy.expression, 'i')

		return filtered.filter(note => {
			const isRegex = !regex ||
				(note.info.txt && regex.test(note.info.txt)) ||
				(note.info.title && regex.test(note.info.title)) ||
				(note.info.todos && note.info.todos.some(todo => regex.test(todo.txt)))

			return isRegex && (!filterBy.type || filterBy.type === note.type)
		})
	}
	const filteredNotes = notesFilter(notes, filterBy)

	if (!notes) return <section>Loading notes...</section>
	if (!filteredNotes.length) return <section>No notes</section>
	return (
		<section className="note-index">
			<section className='pinned-notes'>
				<NoteList
					notes={filteredNotes.filter(note => note.placement === 'pin')}
					onPinNote={onPinNote}
					onColorNote={onColorNote}
					onBinNote={onBinNote}
				/>
			</section>
			<section className='basic-notes'>
				<NoteList
					notes={filteredNotes.filter(note => note.placement === 'basic')}
					onPinNote={onPinNote}
					onColorNote={onColorNote}
					onBinNote={onBinNote}
				/>
			</section>
		</section>
	)
}
