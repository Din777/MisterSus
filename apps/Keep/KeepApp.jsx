import { keepService } from "./Services/keepService.js"

export class KeepApp extends React.Component {

    state = {
        notes: [],
    }

    componentDidCatch(){
        this.loadNotes()
    }

    loadNotes = () => {
        keepService.query().then(notes => {
            this.setState({ notes })
        })
    }

    render() {
        return (
            <section className="keep-app">
                <h1>Hello Keep!</h1>
                
            </section>
        )
    }

}