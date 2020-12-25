import { keepService } from "../Services/keepService.js"

export class AddNote extends React.Component {

    state = {
        note: keepService.getNewNoteTemplate(),
        placeholder: 'Once upon a time...',
        type: '',
        value: '',
        isPinned: false,
        backgroundColor: '#d8dde4'
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
        console.log('ev.target.name',ev.target.name);
        switch (ev.target.name) { 
            case 'txt-note':
                this.setState({placeholder: 'Gimme a note', type: 'NoteTxt' })
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
        // ev.preventDefault();
        // console.log('note:', this.state.note);
        // var note = keepService.makeNoteFromTemplate(this.state.type,this.state.value, this.state.isPinned, this.state.backgroundColor)
        // keepService.getNewNoteToAdd(note)
            // .then(note => {
            //     console.log('changes saved', note);
            // })
         if (Object.keys(this.state.note.info).length === 0) return
        this.props.onAddKeep(this.state.note);

        this.setState({
            // placeholder: 'The story continues...',
            // value: '',
            note: keepService.getNewNoteTemplate()
        })
        // keepService.getNotesForDisplay()
        // this.props.history.push('/keep')
    }

   

    render() {
        const note = this.state.note
        var key = this.getInfoKeyByType(note.type);

        return (
            <section className="add-note">
                {/* <label htmlFor="text">What's on your mind?</label> */}
                <input value={note.info[[key]] || ''} type="text" ref={this.refInput} placeholder={this.state.placeholder}
                    name="text" className="note-input" onChange={this.onInputChange} />
                <div className="btn-container">
                    <button className="btn-type" name="txt-note" onClick={this.onChangeNoteType}>txt</button>
                    <button className="btn-type" name="img-note" onClick={this.onChangeNoteType}>img</button>
                    <button className="btn-type" name="video-note" onClick={this.onChangeNoteType}>video</button>
                    <button className="btn-type" name="todos-note" onClick={this.onChangeNoteType}>list</button>
                    <button className="btn-type" onClick={this.onSaveNote}>save</button>
                </div>
            </section>
        )
    }
}


