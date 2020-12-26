import { mailService } from '../services/mailService.js'
import { utilService } from '../../../services/utilService.js'

export class AddMail extends React.Component {

    state = {
        mail: {
            id: utilService.makeId(),
            subject: '',
            body: '',
            from: 'Dina',
            isRead: false,
            sentAt: Date.now()
        }

    };

    onSaveMail = (ev) => {//on submit
        ev.preventDefault();

        mailService.save(this.state.mail)
            .then(savedMail => {
                console.log('Saves succesfully', savedMail);
                this.props.history.push('/mail');
            })

    };

    onInputChange = (ev) => {//on input change
        console.log('ev.target.value', ev.target.value);
        const mail = { ...this.state.mail };
        mail[ev.target.name] = ev.target.value;
        this.setState({
            mail
        });
    };

    onAddMailToView = () => {
        mailService.add(this.state.mail)
        .then(savedMail => {
            this.props.addMail()
        })
    }

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
                            <td><input type="email" name="To" autoComplete="off" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Cc:</label></td>
                            <td><input type="email" name="Cc" autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Bcc:</label></td>
                            <td><input ref={this.refInput} type="Bcc" name="email" autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="subject">Subject:</label></td>
                            <td><input type="text" id="name" name="subject" placeholder="" required autoComplete="off"
                                onChange={this.onInputChange} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="comment"></label></td>
                        </tr>
                    </tbody>
                </table>
                <textarea name="body" form="usrform" onChange={this.onInputChange}></textarea><br />
                <button type="submit" className="send-btn" onClick={this.onAddMailToView}>Send</button>
                {/* </form> */}
            </div>
        );

    }
}