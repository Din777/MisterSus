import {eventBusService} from "../Services/eventBusService.js"

const { NavLink, withRouter } = ReactRouterDOM

export class AppHeader extends React.Component {

    state={
        msg:''
    }

    goToAbout = () => {
        this.props.history.push('/about');
    }    

    render(){
        return <header className="app-header">
            <nav>
                <ul className="clean-list">
                    <li><NavLink activeClassName="my-active" exact-to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/mail">MisterMail</NavLink></li>
                    <li><NavLink to="/keep">MissKeep</NavLink></li>
                    <li><NavLink to="/books">MissBooks</NavLink></li>
                </ul>
                {/* <div className="center">
                    <h2>MisterSus</h2>
                    <a className="small" onClick={this.goToAbout}>
                        Meet the team
                    </a>
                </div> */}
            </nav>
        </header>
    }

}

