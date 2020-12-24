import { keepService } from "../Services/keepService.js"

export class EditNote extends React.Component {

    state = {
        note: {
            type: "NoteText",
            isPinned: false,
            info: {
                txt: ''
            }
        }
    }

    refInput = React.createRef()
  

    componentDidMount() {
     
        const { noteId } = this.props.match.params;
        // console.log('noteId', noteId);
        // console.log('this.refInput:', this.refInput);
        this.refInput.current.focus();
        if (!noteId) return;
        keepService.getById(noteId).then(note => {
            this.setState({ note })
        })
    }

    onInputChange = (ev) => {
        
        // const value = ev.target.value;
        const value = (ev.target.type === 'number')? +ev.target.value  : ev.target.value;
        const note = { ...this.state.note }
        note.info[ev.target.name] = value
        this.setState({ 
            note: note 
        })
    }

    onSaveNote = (ev) => {
        console.log('entered save note');
        ev.preventDefault();
        keepService.save(this.state.note)
            .then(note => {
                console.log('changes saved',note);
                this.props.history.push('/note')
            })
    }

    render() {
        return (
                <section>
                    <label htmlFor="text">Write a thought:</label> 
                    <input value={this.state.note.info.txt} type="text" ref={this.refInput}  placeholder="Once upon a time..."
                        name="txt" onChange={this.onInputChange} />
                    <button onClick={this.onSaveNote}>{(this.state.note.id) ? 'Update' : 'Add'}</button>
                </section>
   
        )
    }
}