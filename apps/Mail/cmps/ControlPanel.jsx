
export function ControlPanel(toggleAddMail) {

    // return <section className="ControlPanel">
    //     <h1><span>📥 </span>Inbox</h1>
    //     <h1><span>☆ </span>Starred</h1>
    //     <h1><span>📤 </span>Sent Mail</h1>
    // </section>

    return (<table>
        {/* <button className="add-btn" onClick={() => { ToggleAddMail() }}>➕<span> Compose</span></button> */}
        <tbody>
            <tr>
                <td>📥</td><td>Inbox</td>
            </tr>
            <tr>
                <td>☆</td><td>Starred</td>
            </tr>
            <tr>
                <td>📤</td><td>Sent Mail</td>
            </tr>
        </tbody>
    </table >
    )

}