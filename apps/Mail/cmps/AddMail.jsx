
export function AddMail({ toggleAddMail }) {

    return (
        <div className="modal">
            <h1>New Message</h1>
            <button className="close-btn" onClick={toggleAddMail}>X</button>
            <table className="modal-tbl">
                <tbody>
                    <tr>
                        <td><label htmlFor="email">To:</label></td>
                        <td><input type="email" name="email" autoComplete ="off" required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Cc:</label></td>
                        <td><input type="email" name="email" autoComplete ="off"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Bcc:</label></td>
                        <td><input type="email" name="email" autoComplete ="off"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="subject">Subject:</label></td>
                        <td><input type="text" id="name" name="name" placeholder="" required autoComplete ="off"/></td>
                    </tr>
                    <tr>
                    <td><label htmlFor="comment">:</label></td>
                        <textarea name="comment" form="usrform"></textarea>
                    </tr>
                </tbody>
                <button className="send-btn" onClick={toggleAddMail}>Send</button>
            </table>
        </div>
    );

}