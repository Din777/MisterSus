import { keepService } from "./Services/keepService.js"
import { KeepList } from "./cmps/KeepList.jsx";
import { AddNote } from "./cmps/AddNote.jsx"

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



    render() {
        const notes = this.state.notes
        console.log('notes', notes);
        return (
            <section className="keep-app">
                <h1>Hello Keep!</h1>
                <AddNote />
                <KeepList notes={notes} />
            </section>
        )
    }

}