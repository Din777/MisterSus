const { Link } = ReactRouterDOM;

export function KeepPreview({ note, onRemove }) {
    return <article className="note-preview">
        <h4>{note.info.txt}</h4>
        <Link to={`/keep/edit/${note.id}`}>Edit Note</Link>
        <button onClick={() => {
            onRemove(note.id)
        }}>Remove</button>
    </article>
}