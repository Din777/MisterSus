import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVideo } from './NoteVideo.jsx'
const { Link } = ReactRouterDOM;

export function KeepPreview({ note, onRemove, onTogglePin }) {


    switch (note.type) {
        case "NoteTxt":
            return <article className="note-item">
                <NoteTxt note={note} />
                {/* <div className="btn-container">
                    <div className="btn-link"><Link to={`/keep/edit/${note.id}`}>Edit</Link></div>
                    <button className={`fas fa-thumbtack ' ${note.isPinned ? 'pin' : 'unpin'}`} name="pin-note" onClick={() => onTogglePin(note.id)} ></button>
                    <button className="fas fa-trash-alt" onClick={() => {
                        onRemove(note.id)
                    }}></button>
                </div> */}
            </article>
        case "NoteImg":
            return <article className="note-item">
                <NoteImg note={note} />
                {/* <div className="btn-container">
                    <div className="btn-link"><Link to={`/keep/edit/${note.id}`}>Edit</Link></div>
                    <button className={`fas fa-thumbtack ' ${note.isPinned ? 'pin' : 'unpin'}`} name="pin-note" onClick={() => onTogglePin(note.id)} ></button>
                    <button className="fas fa-trash-alt" onClick={() => {
                        onRemove(note.id)
                    }}></button>
                </div> */}
            </article>
        case "NoteTodos":
            return <article className="note-item">
                <NoteTodos note={note} />
                {/* <div className="btn-container">
                    <div className="btn-link"><Link to={`/keep/edit/${note.id}`}>Edit</Link></div>
                    <button className={`fas fa-thumbtack ' ${note.isPinned ? 'pin' : 'unpin'}`} name="pin-note" onClick={() => onTogglePin(note.id)} ></button>
                    <button className="fas fa-trash-alt" onClick={() => {
                        onRemove(note.id)
                    }}></button>
                </div> */}
            </article>
        case "NoteVideo":
            return <article className="note-item">
                <NoteVideo note={note} />
                {/* <div className="btn-container">
                    <div className="btn-link"><Link to={`/keep/edit/${note.id}`}>Edit</Link></div>
                    <button className={`fas fa-thumbtack ' ${note.isPinned ? 'pin' : 'unpin'}`} name="pin-note" onClick={() => onTogglePin(note.id)} ></button>
                    <button className="fas fa-trash-alt" onClick={() => {
                        onRemove(note.id)
                    }}></button>
                </div> */}
            </article>
        default:
            return <h2>must've crossed wires under the ocean....</h2>
    }

}