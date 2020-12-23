import { keepService } from "../Services/keepService.js"

export class AddNote extends React.Component {

    state = {
        txt: ''
    }

    refInput = React.createRef()

    componentDidMount() {
        // const { noteId } = this.props.match.params;
        // // console.log('this.elInput:', this.elInput);
        // this.refInput.current.focus();
        // if (!noteId) return;
        // keepService.getById(noteId).then(note => {
        //     this.setState({ note });
        // });
    }

    onInputChange = (ev) => {
        const value = ev.target.value;
        this.setState({ txt: value })
    }

    onSaveNote = (txt) => {
        // ev.PreventDefault();
        console.log('entered save txt');
        keepService.save(this.state.txt)
        // this.props.history.push('/txt')
    }

    render() {
        return (
            <form onSubmit={this.onSaveNote}>
                <label htmlFor="text">Write a thought:</label>
                <input type="text" name="text" placeholder="Once upon a time..."
                    onChange={this.onInputChange} />
                <button type="submit">Add</button>
            </form>
        )
    }

}