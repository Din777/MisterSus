import { keepService } from "../Services/keepService.js"

export class EditNote extends React.Component {

    state = {
        note: {
            id: '',
            type: "NoteText",
            isPinned: false,
            info: {
                txt: ''
            }
        }
    }

    refInput = React.createRef()
  

    componentDidMount() {
        // console.log('refInput',refInput);
        const { noteId } = this.props.match.params;
        console.log('noteId', noteId);
        console.log('this.refInput:', this.refInput);
        this.refInput.current.focus();
        if (!noteId) return;
        keepService.getById(noteId).then(note => {
            this.setState({ note });
        });
    }

    onInputChange = (ev) => {
        
        const value = (ev.target.type === 'number')? +ev.target.value  : ev.target.value;
        const note = { ...this.state.note }
        console.log('note', note)
        console.log('event',ev);
        note[ev.target.name] = value
        this.setState({ note })
    }

    onSaveNote = (ev) => {
        ev.PreventDefault();
        console.log('event:',ev);
        console.log('entered save note');
        keepService.save(this.state.note)
            .then(savedNote => {
                console.log('changes saved',savedNote);
                this.props.history.push('/note')
            })
    }

    render() {
        return (
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="text">Write a thought:</label>
                <input type="text"  ref={this.refInput} placeholder="Once upon a time..."
                    onChange={this.onInputChange} />
                <button type="submit">{(this.state.note.id) ? 'Update' : 'Add'}</button>
            </form>
        )
    }
//value={this.state.note.info.txt} 
}