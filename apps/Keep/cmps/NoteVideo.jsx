export function NoteVideo({ note }) {

    return (<section className="note-video">
        <h3>{note.info.title}</h3>
      <iframe src={note.info.url} width="100%"></iframe>
    </section>
    )

}