import { mailService } from './services/mailService.js'
import { MailList } from '../Mail/cmps/MailList.jsx'
import { AddMail } from './cmps/AddMail.jsx'
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

    // addMail(){
    //     addMailToView//service function
    //     onToggleAddMail()
    //     loadMails()
    // }

    onToggleAddMail=()=> {
        if (this.state.isNewMail) this.setState({isNewMail: false })
        else this.setState({isNewMail: true })
    }

    render() {
        const mailsForDisplay = this.getMailsForDisplay();
        return (
            <section className="mail-app">
                <button className="add-btn" onClick={this.onToggleAddMail}>➕<span> Compose</span></button>
                {/* <MailFilter setFilter={this.onSetFilter} /> */}
                {/* <Link className="btn" to="/pet/edit">Add Pet</Link> */}
                <h2>My Mails</h2>
                {/* <div className="mail-list"> */}
                <MailList mails={mailsForDisplay} onRemove={this.onRemoveMail} />
                {/* </div> */}
                {this.state.isNewMail && <AddMail toggleAddMail={this.onToggleAddMail} />}
                {/* {!this.state.isNewMail && <MailPreview />} */}
                {/* {!this.state.isNewMail && <MailPreview toggleAddMail={this.onToggleAddMail} />} */}

            </section>
        );
    }
}