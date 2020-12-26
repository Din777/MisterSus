import { mailService } from './services/mailService.js'
import { MailList } from '../Mail/cmps/MailList.jsx'
import { AddMail } from './cmps/AddMail.jsx'
import { MailFilter } from '../Mail/cmps/MailFilter.jsx'
import { ControlPanel } from './cmps/ControlPanel.jsx'
const { Link } = ReactRouterDOM;

export class MailApp extends React.Component {

    state = {
        mails: [],
        filterBy: {
            subject: '',
            unread: true,
            starred: false
        },
        isNewMail: false
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

    onAddMail = () => {
        console.log('enter onAddMail function');
        // console.log('mail',mail.target);
        // mailService.addMailToView()//service function
        this.onToggleAddMail()
        this.loadMails()
    }

    onToggleAddMail = () => {
        if (this.state.isNewMail) this.setState({ isNewMail: false })
        else this.setState({ isNewMail: true })
    }

    render() {
        const mailsForDisplay = this.getMailsForDisplay();
        return (
            <section className="mail-app">
                <h2>My Mails</h2>
                {/* <MailFilter setFilter={this.onSetFilter} /> */}
                {/* <Link className="btn" to="/pet/edit">Add Pet</Link> */}
                <div className="common-container">
                    <div className="side-container">
                        <button className="add-btn" onClick={this.onToggleAddMail}>➕<span> Compose</span></button>
                        <ControlPanel toggleAddMail={this.onToggleAddMail} />
                    </div>
                    <MailList mails={mailsForDisplay} onRemove={this.onRemoveMail} />
                    {this.state.isNewMail && <AddMail toggleAddMail={this.onToggleAddMail} addMail={this.onAddMail} />}
                </div>
            </section>
        );
    }
}