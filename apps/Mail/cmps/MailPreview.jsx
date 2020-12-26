const { Link } = ReactRouterDOM;

export class MailPreview extends React.Component {
    state = {
        style: 'unread'
    }

    onStyleChange = () => {
        let styleState = this.state.style
        let color = styleState === 'unread' ? 'read' : 'unread'
        this.setState({ style: color })
    }

    convertDate(date) {
        var timestamp = date;
        var correctDate = new Date(timestamp);
        return correctDate.toLocaleString();
    }

    render() {
        return <article className={this.state.style} onClick={this.onStyleChange}>
            <Link to={`/mail/${this.props.mail.id}`}>
                <div className="mail-row">
                    <p>From: {this.props.mail.from}</p><p>Subject: {this.props.mail.subject}</p>
                    <p>Date: {this.convertDate(this.props.mail.sentAt)}</p>
                    <p onClick={() => {
                        onRemove(this.props.mail.id)
                    }}>🗑</p>
                </div>
            </Link>
        </article>
    }
}