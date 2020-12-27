import { eventBusService } from "../Services/eventBusService.js"
import { utilService } from "../Services/utilService.js"

const { NavLink, withRouter } = ReactRouterDOM

export class AppHeader extends React.Component {

    state = {
        msg: ''
    }

    goToAbout = () => {
        this.props.history.push('/about');
    }

    onToggleClose = () => {
        utilService.toggleClose()
    }

    onToggleMenu = () => {
        utilService.toggleMenu()
    }

    render() {
        return <header className="app-header">
            <nav>
                <ul className="clean-list">
                    <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/mail">MisterMail</NavLink></li>
                    <li><NavLink to="/keep">MissKeep</NavLink></li>
                    <li><NavLink to="/books">MissBooks</NavLink></li>
                </ul>
            
            </nav>
            <div className="mobile-menu-close" onClick={this.onToggleClose} hidden>x</div>
            <div className="mobile-menu-btn" onClick={this.onToggleMenu}>☰</div>
        </header>
    }

}

