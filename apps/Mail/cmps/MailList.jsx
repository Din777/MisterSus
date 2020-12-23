import { MailPreview } from './MailPreview.jsx'

export function MailList({ mails, onRemove }) {
    console.log(mails);
    return (
        <section className="mail-list">
            {mails.map(mail => {
                return <MailPreview key={mail.id} mail={mail}
                    onRemove={onRemove} />;
            })
            }
        </section>
    );
}