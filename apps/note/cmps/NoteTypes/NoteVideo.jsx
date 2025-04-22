export function NoteVideo({ info }) {
    return <section className="note-video">
        <iframe
            width={300} height={180}
            src={info.url}
        />
    </section>
}