const { Link } = ReactRouterDOM;


export function MailPreview({ mail, onRemove }) {

    return <article className="mail-preview">
        <Link to={`/mail/${mail.id}`}>
            <h1>{mail.subject}</h1>
        </Link>
        <div>
            <Link to={`/mail/edit/${mail.id}`}>Edit mail</Link>
            <button onClick={() => {
                onRemove(mail.id)
            }}
            >Remove</button>
        </div>

    </article>

}