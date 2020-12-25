import { keepService } from "./Services/keepService.js"
import { KeepList } from "./cmps/KeepList.jsx";
import { EditNote } from "./cmps/EditNote.jsx"
import { AddNote } from "./cmps/AddNote.jsx";
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

    addKeep = (note) => {
        if (!note) return;
        keepService.makeNoteFromTemplate(note)
            .then(() => {
                this.loadNotes()
            })
    }


    render() {
        const notes = this.state.notes
        console.log('notes', notes);
        return (
            <section className="keep-app">
                <h2>My Noteskeeper</h2>
                <AddNote onAddKeep={this.addKeep} />
                <KeepList notes={notes} onRemove={this.onRemoveNote} />
            </section>
        )
    }

}