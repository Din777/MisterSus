import { AppHeader } from './cmps/AppHeader.jsx';
import { About } from './pages/About.jsx';
import { Home } from './pages/Home.jsx';
import { KeepApp } from './apps/Keep/KeepApp.jsx';
import { MailApp } from './apps/Mail/MailApp.jsx';
import { EditNote } from './apps/Keep/cmps/EditNote.jsx';
import { AddNote } from './apps/Keep/cmps/AddNote.jsx';
import { BookApp } from './apps/Books/BookApp.jsx';
import { BookDetails } from './apps/Books/cmps/BookDetails.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class RootCmp extends React.Component {

    render() {
        return (
            <Router>
                <section className="app">
                    <AppHeader />
                    <Switch>
                        <Route path="/books/:bookId" component={BookDetails} />
                        <Route path="/books" component={BookApp} />
                        <Route path="/keep/edit/:noteId?" component={EditNote} />
                        <Route path="/keep/add" component={AddNote} />
                        <Route path="/keep" component={KeepApp} />
                        <Route path="/mail" component={MailApp} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home} />
                    </Switch>
                </section>
            </Router>
        )
    }
}