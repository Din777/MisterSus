// const { NavLink } = ReactRouterDOM;

export class ControlPanel extends React.Component {
    state = {
        inboxBgc: 'clicked',
        starredBgc: 'unclicked',
        sentBgc: 'unclicked'
    }

    onInboxBgcColorChange = () => {
        let colorState = this.state.inboxBgc
        if (colorState === 'clicked') return
        let color = colorState === 'unclicked' ? 'clicked' : 'unclicked'
        let otherColor = color === 'clicked' ? 'unclicked' : 'clicked'
        this.setState({ inboxBgc: color })
        this.setState({ starredBgc: otherColor })
        this.setState({ sentBgc: otherColor })
    }

    onStarredBgcColorChange = () => {
        let colorState = this.state.starredBgc
        if (colorState === 'clicked') return
        let color = colorState === 'unclicked' ? 'clicked' : 'unclicked'
        let otherColor = color === 'clicked' ? 'unclicked' : 'clicked'
        this.setState({ starredBgc: color })
        this.setState({ sentBgc: otherColor })
        this.setState({ inboxBgc: otherColor })
    }

    onSentBgcColorChange = () => {
        let colorState = this.state.sentBgc
        if (colorState === 'clicked') return
        let color = colorState === 'unclicked' ? 'clicked' : 'unclicked'
        let otherColor = color === 'clicked' ? 'unclicked' : 'clicked'
        this.setState({ sentBgc: color })
        this.setState({ inboxBgc: otherColor })
        this.setState({ starredBgc: otherColor })
    }

    render() {
        return (<table>
            {/* <button className="add-btn" onClick={() => { ToggleAddMail() }}>➕<span> Compose</span></button> */}
            <tbody>
                <tr className={this.state.inboxBgc} onClick={this.onInboxBgcColorChange}>
                    <td>📥</td><td> Inbox</td>
                </tr>
                <tr className={this.state.starredBgc} onClick={this.onStarredBgcColorChange}>
                    <td>☆</td><td> Starred</td>
                </tr>
                <tr className={this.state.sentBgc} onClick={this.onSentBgcColorChange}>
                    <td>📤</td><td> Sent Mail</td>
                </tr>
            </tbody>
        </table >
        )
    }
    
}

// export function ControlPanel(toggleAddMail) {

//     return (<table>
//         {/* <button className="add-btn" onClick={() => { ToggleAddMail() }}>➕<span> Compose</span></button> */}
//         <tbody>
//             <tr>
//                 <td>📥</td><td>Inbox</td>
//             </tr>
//             <tr>
//                 <td>☆</td><td>Starred</td>
//             </tr>
//             <tr>
//                 <td>📤</td><td>Sent Mail</td>
//             </tr>
//         </tbody>
//     </table >
//     )

    //         return <section>
    //             <nav>
    //                 <ul>
    //                     <li><NavLink exact to = "/mail"><span>📥</span>Inbox</NavLink></li>
    //                     <li><NavLink to = "/mail/starred"><span>☆</span>Starred</NavLink></li>
    //                     <li><NavLink to = "/mail/sent"><span>📤</span>Sent Mail</NavLink></li>
    //                 </ul>
    //             </nav>
    //         </section>
// }