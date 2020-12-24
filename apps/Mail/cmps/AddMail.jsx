
export function AddMail({toggleAddMail}) {

    return (
        <div className="modal">
            <h1>New Message</h1>
            <button className="close-btn" onClick={toggleAddMail}>X</button>
            <table className="modal-tbl">
                <tbody>
                    <tr>
                        <td><label htmlFor="email">To:</label></td>
                        <td><input type="email" name="email" required /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Cc:</label></td>
                        <td><input type="email" name="email" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Bcc:</label></td>
                        <td><input type="email" name="email" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="name">Subject:</label></td>
                        <td><input type="text" id="name" name="name" placeholder="" required /></td>
                    </tr>
                    {/* <input type="text" /> */}
                </tbody>
            </table>
            <pre>Enter a text.....</pre>
        </div>
    );

}