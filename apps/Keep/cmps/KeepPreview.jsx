import { NoteTxt } from './NoteTxt.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVideo } from './NoteVideo.jsx'
const { Link } = ReactRouterDOM;

export function KeepPreview({ note }) {


    // componentDidMount() {
    //     const { noteId } = this.props.match.params
    //     if (!noteId) return;
    //     keepService.getById(noteId).then(note => {
    //         this.setState({ note })
    //     })
    // }

    switch (note.type) {
        case "NoteText":
            return <Link to={`/keep/edit/$${note.id}`}><NoteTxt note={note} /></Link>
        case "NoteImg":
            return <Link to={`/keep/edit/$${note.id}`}><NoteImg note={note} /></Link>
        case "NoteTodos":
            return <Link to={`/keep/edit/$${note.id}`}><NoteTodos note={note} /></Link>
        case "NoteVideo":
            return <Link to={`/keep/edit/$${note.id}`}><NoteVideo note={note} /></Link>
        default:
            return <h2>must've crossed wires under the ocean....</h2>
    }

        // return (<article className="note-preview">
        //     <h4>{note.info.txt}</h4>
        //     <Link to={`/keep/edit/${note.id}`}>Edit Note</Link>
        //     <button onClick={() => {
        //         onRemove(note.id)
        //     }}>Remove</button>
        // </article>)
    

}