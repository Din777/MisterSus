const { Link } = ReactRouterDOM;


export function MailPreview({ mail, onRemove }) {
    // console.log(Date.now());
    return <article className="mail-preview">
        <Link to={`/mail/${mail.id}`}>
            <div className="mail-row">
            <p>From: {mail.from}</p><p>Subject: {mail.subject}</p>
            <p>Date: {convertDate(mail.sentAt)}</p>
            <p onClick={() => {
                onRemove(mail.id)
            }}>🗑</p>
            </div>
        </Link>
        {/* <div> */}
            {/* <Link to={`/mail/edit/${mail.id}`}>Edit mail</Link> */}
            {/* <button className="remove-btn" onClick={() => {
                onRemove(mail.id)
            }}
            >🗑</button>
        </div> */}

    </article>

}

function convertDate(date) {
    var timestamp = date;
    var correctDate = new Date(timestamp);
    return correctDate.toLocaleString();
    console.log(correctDate);
    // return correctDate;//it's a object/To Do: have to convert to normal date display. Make it a new compenent
}