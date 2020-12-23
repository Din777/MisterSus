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
        // keepService.query()
        // this.setState({notes: notes})
        // console.log('notes', this.state.notes)
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
                <Link className="btn" to="/keep/edit">Add Note</Link>
                <KeepList notes={notes} onRemove={this.onRemoveNote} />
            </section>
        )
    }

}