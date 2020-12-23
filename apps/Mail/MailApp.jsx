export class MailApp extends React.Component {

    state = {
        mails: [],
        filterBy: {
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
    render() {
        return (
            <h1>Hello Mail!</h1>
        )
    }

}