import { keepService } from "./Services/keepService.js"
import { KeepList } from "./cmps/KeepList.jsx";
import { EditNote } from "./cmps/EditNote.jsx"
import { AddNote } from "./cmps/AddNote.jsx";
import { KeepFilter } from "./cmps/KeepFilter.jsx"
const { Link } = ReactRouterDOM;
const { Route } = ReactRouterDOM;

export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: {
            type: ''
        }
    }

    componentDidMount() {
        this.loadNotes()
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

    get notesForDisplay(){
        const { filterBy } = this.state
        const filterRegex = new RegExp(filterBy.type, 'i')
        return this.state.notes.filter(note => filterRegex.test(note.type))
    }

    onTogglePin = (noteId) => {
        keepService.togglePin(noteId)
            .then(() => {
                this.loadNotes()
            })
    }

    onSetFilter = (filterBy) => {
        console.log('filterBy', filterBy)
        this.setState({ filterBy })
    }

    onLoadNotes = () => {
        this.loadNotes()
    }

    render() {
        const notesForDisplay = this.notesForDisplay
        return (
            <section className="keep-app">
                <h2>My Noteskeeper</h2>
                <KeepFilter setFilter={this.onSetFilter} />
                <AddNote onLoadNotes={this.loadNotes} />
                <KeepList className={"pinned-notes"} notes={notesForDisplay.filter(note => note.isPinned)} onRemove={this.onRemoveNote} onTogglePin={this.onTogglePin} />
                <KeepList className={"unpinned-notes"} notes={notesForDisplay.filter(note => !note.isPinned)} onRemove={this.onRemoveNote} onTogglePin={this.onTogglePin} />
      
                
                {/* PREVIOUS VERSIONS */}
                {/* <KeepList notes={notesForDisplay} onRemove={this.onRemoveNote} /> */}
                {/* <KeepList notes={notes} onRemove={this.onRemoveNote} /> */}
            </section>
        )
    }

}