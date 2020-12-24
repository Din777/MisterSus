import {mailService} from './services/mailService.js'
import { MailList } from '../Mail/cmps/MailList.jsx'
import { MailFilter } from '../Mail/cmps/MailFilter.jsx'
const { Link } = ReactRouterDOM;

export class MailApp extends React.Component {

    state = {
        mails: [],
        filterBy: {
            subject: '',
            unread: true,
            starred: false
        },
    }

    componentDidMount() {
        this.loadMails(); 
    }

    loadMails = () => {
        mailService.query().then(mails => {
            this.setState({ mails });
        });
    }

    onRemoveMail = (mailId) => {
        mailService.remove(mailId).then(() => {
            this.loadMails()
        })
    }

    getMailsForDisplay = () => {
        return this.state.mails
        // const { filterBy } = this.state;
        // const filterRegex = new RegExp(filterBy.subject, 'i');
        // return this.state.mails.filter(mail => filterRegex.test(mail.subject));
    }

    onSetFilter = (filterBy) => {
        console.log('filterBy:', filterBy);
        this.setState({ filterBy });
    }

    render() {
        const mailsForDisplay = this.getMailsForDisplay();
        return (
            <section className="mail-app">
                <button className="add-btn" onClick={this.onAdd()}>➕<span> Compose</span></button>
                {/* <MailFilter setFilter={this.onSetFilter} /> */}
                {/* <Link className="btn" to="/pet/edit">Add Pet</Link> */}
                <h2>My Mails</h2>
                {/* <div className="mail-list"> */}
                <MailList mails={mailsForDisplay} onRemove={this.onRemoveMail} />
                {/* </div> */}
            </section>
        );
    }

    onAdd(){
        this.openModal()

    }
}