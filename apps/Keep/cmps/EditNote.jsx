import { keepService } from "../Services/keepService.js"
import { ChangeNoteColor } from "./ChangeNoteColor.jsx"

export class EditNote extends React.Component {

    state = {
        note: {
            id: "",
            type: "",
            isPinned: false,
            info: {
                title: '',
                txt: '',
                label: '',
                todos: [],
                url: ''
            },
            style: {
                backgroundColor: "d8dde4"
            },
            placeholder: ''
        }
    }

    refInput = React.createRef()


    componentDidMount() {
        this.getNote()

    }

    getNote = () => {
        const { noteId } = this.props.match.params
        console.log('noteId', noteId);
        this.refInput.current.focus();
        // if (!noteId) return;
        keepService.getById(noteId).then(note => {
            this.setState({ note })
        })
    }

    onChangeColor = (color) => {
        this.setState({
            note: { ...this.state.note, style: { ...this.state.note.style, backgroundColor: color } }
        })
    }

    onContentChange = (ev) => {

        const key = this.getInfoKeyByType(this.state.note.type)
        console.log('key', key);
        console.log('this.state.note.type:', this.state.note.type);

        // const note = { ...this.state.note }
        // note.info[ev.target.name] = value
        this.setState({
            note: { ...this.state.note, info: { ...this.state.note.info, [key]: ev.target.value } },
            value: ev.target.value
        })

        // const value = ev.target.value;
        // const value = (ev.target.type === 'number')? +ev.target.value  : ev.target.value;
        // const note = { ...this.state.note }
        // note.info[ev.target.name] = value
        // this.setState({ 
        //     note: note 
        // })
    }

    onTitleChange = (ev) => {
        this.setState({
            note: { ...this.state.note, info: { ...this.state.note.info, title: ev.target.value } },
            value: ev.target.value
        })

    }


    getInfoKeyByType(type) {
        console.log('entered getIntoKeyByType');
        switch (type) {
            case 'NoteTxt':
                return 'txt'
            case 'NoteImg':
                return 'url'
            case 'NoteTodos':
                return 'label'
            case 'NoteVideo':
                return 'url'
        }
    }

    onSaveNote = (ev) => {
        console.log('entered save note');
        ev.preventDefault();
        keepService.getChangesToSave(this.state.note)
        if (Object.keys(this.state.note.info).length === 0) return

        this.setState({
            note: {
                id: "",
                type: "",
                isPinned: false,
                info: {
                    title: '',
                    txt: '',
                    label: '',
                    todos: [],
                    url: ''
                },
                style: {
                    backgroundColor: "d8dde4"
                },
                placeholder: ''
            }
        })
        this.props.history.push('/keep')
    }

    render() {
        const note = this.state.note
        console.log('note', note);
        if (!note) return <h4>Loading...</h4>
        var key = this.getInfoKeyByType(note.type);
        return (
            // <section>
            //     <label htmlFor="text">Change me!</label> 
            //     <input value={this.state.note.info.txt} type="text" ref={this.refInput}  placeholder="Once upon a time..."
            //         name="txt" onChange={this.onContentChange} />
            //     <button onClick={this.onSaveNote}>{(this.state.note.id) ? 'Update' : 'Add'}</button>
            // </section>
            <section className="add-note">
                <input value={note.info.title} ref={this.refInput} type="text" placeholder="Change my title!"
                    name="text" className="note-input" onChange={this.onTitleChange} />
                <input value={note.info[[key]] || ''} ref={this.refInput} type="text" placeholder="Change my content!"
                    name="text" className="note-input" onChange={this.onContentChange} />
                <div className="btn-container">
                    <ChangeNoteColor onChangeColor={this.onChangeColor} note={note} />
                    <button className="btn-type" onClick={this.onSaveNote}>save</button>
                </div>
            </section>

        )
    }
}
