import { KeepPreview } from "./KeepPreview.jsx"
const { Link } = ReactRouterDOM;

export function KeepList({ notes, onRemove, onTogglePin }) {

    return (
       
        <section className="notes-list clean-list">
            {console.log('notes', notes)}
            {notes.map(note => {
                return <KeepPreview note={note} key={note.id} onRemove={onRemove} onTogglePin={onTogglePin}  />
            })
            }
        </section>
       
    )
}

{/* <button className={'fas fa-thumbtack' + (note.isPinned ? 'pin' : 'unpin')} name="pin-note" onClick={() => onTogglePin(note.id)} ></button> */}
 