import { mailService } from '../services/mailService.js'

export class AddMail extends React.Component {

    state = {
        mail: { subject: '', body: '', }
    };

    refInput = React.createRef();

    componentDidMount() {
        const { mailId } = this.props.match.params;
        // console.log('this.elInput:', this.elInput);
        // this.refInput.current.focus();
        if (!mailId) return;
        mailService.getById(mailId).then(mail => {
            this.setState({ mail });
        });
    }


    onSaveMail = (ev) => {//on submit
        ev.preventDefault();

        mailService.save(this.state.mail)
            .then(savedMail => {
                console.log('Saves succesfully', savedMail);
                this.props.history.push('/mail');
            })

    };

    onInputChange = (ev) => {//on input change
        const mail = { ...this.state.mail };
        mail[ev.target.name] = ev.target.value;
        this.setState({
            mail
        });
    };


    render() {
        return (
            <div className="modal">
                <h1>New Message</h1>
                <button className="close-btn" onClick={this.props.toggleAddMail}>X</button>
                {/* <form onSubmit={}> */}
                    <table className="modal-tbl">
                        <tbody>
                            <tr>
                                <td><label htmlFor="email">To:</label></td>
                                <td><input type="email" name="email" autoComplete="off" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Cc:</label></td>
                                <td><input type="email" name="email" autoComplete="off" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Bcc:</label></td>
                                <td><input ref={this.refInput} type="email" name="email" autoComplete="off" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="subject">Subject:</label></td>
                                <td><input type="text" id="name" name="name" placeholder="" required autoComplete="off" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="comment">:</label></td>
                            </tr>
                        </tbody>
                    </table>
                    <textarea name="comment" form="usrform"></textarea><br />
                    <button className="send-btn" >Send</button>
                {/* </form> */}
            </div>
        );

    }
}