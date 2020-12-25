export function NoteImg({ note }) {

    return (<section className="note-img">
        {console.log('note in note-img:',note)}
        <h3>{note.info.title}</h3>
        <img src={note.info.url} />
    </section>
    )

}