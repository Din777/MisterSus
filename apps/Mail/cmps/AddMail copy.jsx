
// export function AddMail({ toggleAddMail, addMail }) {

//     return (
//         <div className="modal">
//             <h1>New Message</h1>
//             <button className="close-btn" onClick={toggleAddMail}>X</button>
//             <form onSubmit={addMail}>
//                 <table className="modal-tbl">
//                     <tbody>
//                         <tr>
//                             <td><label htmlFor="email">To:</label></td>
//                             <td><input type="email" name="email" autoComplete="off" required /></td>
//                         </tr>
//                         <tr>
//                             <td><label htmlFor="email">Cc:</label></td>
//                             <td><input type="email" name="email" autoComplete="off" /></td>
//                         </tr>
//                         <tr>
//                             <td><label htmlFor="email">Bcc:</label></td>
//                             <td><input type="email" name="email" autoComplete="off" /></td>
//                         </tr>
//                         <tr>
//                             <td><label htmlFor="subject">Subject:</label></td>
//                             <td><input type="text" id="name" name="name" placeholder="" required autoComplete="off" /></td>
//                         </tr>
//                         <tr>
//                             <td><label htmlFor="comment">:</label></td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <textarea name="comment" form="usrform"></textarea><br/>
//                 <button className="send-btn" onClick={() => {
//                     addMail()
//                 }}>Send</button>
//             </form>
//         </div>
//     );

// }