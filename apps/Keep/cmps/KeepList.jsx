import { KeepPreview } from "./KeepPreview.jsx"
const { Link } = ReactRouterDOM;

export function KeepList({ notes, onRemove, onTogglePin }) {

    return (

        <section className="notes-list clean-list">
            {console.log('notes', notes)}
            {notes.map(note =>
                <div className="note-item" key={note.id} style={{ 'backgroundColor': note.style.backgroundColor, 'color': note.style.color }} >
                    <KeepPreview note={note} />
                    <div className="btn-container">
                        <div className="btn-link"><Link to={`/keep/edit/${note.id}`}>Edit</Link></div>
                        <button className={`fas fa-thumbtack ' ${note.isPinned ? 'pin' : 'unpin'}`} name="pin-note" onClick={() => onTogglePin(note.id)} ></button>
                        <button className="fas fa-trash-alt" onClick={() => {
                            onRemove(note.id)
                        }}></button>
                    </div>
                </div>
            )}
        </section>
            


    )
}

{/* <button className={'fas fa-thumbtack' + (note.isPinned ? 'pin' : 'unpin')} name="pin-note" onClick={() => onTogglePin(note.id)} ></button> */ }


        {/* <KeepPreview note={note} onRemove={onRemove} onTogglePin={onTogglePin} /> */ }

        // <section className="notes-list clean-list">
        //     {console.log('notes', notes)}
        //     {notes.map(note => {
        //         return <KeepPreview note={note} key={note.id} onRemove={onRemove} onTogglePin={onTogglePin}  />
        //     })
        //     }
        // </section>