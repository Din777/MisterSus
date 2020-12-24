import { keepService } from "./Services/keepService.js"
import { KeepList } from "./cmps/KeepList.jsx";
import { EditNote } from "./cmps/EditNote.jsx"
const { Link } = ReactRouterDOM;

export class KeepApp extends React.Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes()
        // console.log('hello')
    }

    loadNotes = () => {
        keepService.query().then(notes => {
            this.setState({ notes })
        })
    }

    onRemoveNote = (noteId) => {
        keepService.remove(noteId).then(() => {
            this.loadNotes()
        })
    }



    render() {
        const notes = this.state.notes
        console.log('notes', notes);
        return (
            <section className="keep-app">
                <h2>My Noteskeeper</h2>
               <button className="btn"><Link  to="/keep/edit">Add Note</Link></button> 
                <KeepList notes={notes} onRemove={this.onRemoveNote} />
            </section>
        )
    }

}