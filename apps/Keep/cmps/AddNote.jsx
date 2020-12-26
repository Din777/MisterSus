import { keepService } from "../Services/keepService.js"
import { ChangeNoteColor } from "./ChangeNoteColor.jsx"

export class AddNote extends React.Component {

    state = {
        note: keepService.getNewNoteTemplate(),
        placeholder: 'Once upon a time...',
        type: '',
        value: '',
        isPinned: false,
        backgroundColor: ''
    }

    refInput = React.createRef()

    onInputChange = (ev) => {

        const key = this.getInfoKeyByType(this.state.note.type)
        console.log('key', key);
        console.log('this.state.note.type:', this.state.note.type);

        // const note = { ...this.state.note }
        // note.info[ev.target.name] = value
        this.setState({
            note: { ...this.state.note, info: { ...this.state.note.info, [key]: ev.target.value } },
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

    onChangeNoteType = (ev) => {
        console.log('entered onChangeNoteType');
        console.log('ev.target.name', ev.target.name);
        switch (ev.target.name) {
            case 'txt-note':
                this.setState({ placeholder: 'Gimme a note', type: 'NoteTxt' })
                break;
            case 'img-note':
                this.setState({ placeholder: 'Enter an image url', type: 'NoteImg' })
                break;
            case 'video-note':
                this.setState({ placeholder: 'Enter a video url', type: 'NoteVideo' })
                break;
            case 'todos-note':
                this.setState({ placeholder: 'Write a list separated by commas', type: 'NoteTodos' })
                break;
        }
    }

    onSaveNote = () => {
        console.log('entered save note');

        var note = keepService.makeNoteFromTemplate(this.state.type, this.state.value, this.state.isPinned, this.state.backgroundColor)
        keepService.getNewNoteToAdd(note)
        if (Object.keys(this.state.note.info).length === 0) return
        this.props.onLoadNotes()
        this.setState({
            note: keepService.getNewNoteTemplate()
        })
    }

    onChangeColor = (backgroundColor) => {
        this.setState({ backgroundColor })

    }


    render() {
        const note = this.state.note
        var key = this.getInfoKeyByType(note.type);

        return (
            <section className="add-note">
                <input value={note.info[[key]] || ''} type="text" ref={this.refInput} placeholder={this.state.placeholder}
                    name="text" className="note-input" onChange={this.onInputChange} />
                <div className="btn-container">
                    <ChangeNoteColor onChangeColor={this.onChangeColor} note={note} />
                    <button className="btn-type fas fa-font" name="txt-note" onClick={this.onChangeNoteType}></button>
                    <button className="btn-type far fa-image" name="img-note" onClick={this.onChangeNoteType}></button>
                    <button className="btn-type fas fa-play-circle" name="video-note" onClick={this.onChangeNoteType}></button>
                    <button className="btn-type far fa-list-alt" name="todos-note" onClick={this.onChangeNoteType}></button>
                    <button className="btn-type fas fa-plus" onClick={this.onSaveNote}></button>
                </div>
            </section>
        )
    }
}


