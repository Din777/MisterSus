import { keepService } from "../Services/keepService.js"


var noteTypes = {
    title: 'Note Types',
    cmps: [
        {
            type: 'textNote',
            info: {
                label: 'Gimme a note'
            }
        },
        {
            type: 'imgNote',
            info: {
                label: 'Enter an image url'
            }
        },
        {
            type: 'videoNote',
            info: {
                label: 'Enter a video url'
            }
        },
        {
            type: 'todosNote',
            info: {
                label: 'What do you want to do?'
            }
        },
    ]
}

export class AddNote extends React.Component {

    state = {
        note: {
            type: "",
            isPinned: false,
            info: {},
            style: {
                backgroundColor: "#00d"
            }

        }
    }

    refInput = React.createRef()

    onInputChange = (ev) => {

        // const value = ev.target.value;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
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
                console.log('changes saved', note);
                this.props.history.push('/keep')
            })
    }

    render() {
        const note = this.state.note
        var key = this.getInfoKeyByType(note.type);

        return (
            <section className="add-note">
                <label htmlFor="text">Write a thought:</label>
                <input value={this.state.note.info.txt} type="text" ref={this.refInput} placeholder="Once upon a time..."
                    name="txt" onChange={this.onInputChange} />
                <button onClick={this.onSaveNote}>{(this.state.note.id) ? 'Update' : 'Add'}</button>
            </section>

        )
    }

}


