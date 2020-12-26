export class KeepFilter extends React.Component {

    state = {
        filterBy : {
            type: ''
        }
    }

    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.filterBy)
        }

        const filterBy = { ...this.state.filterBy }
        filterBy[ev.target.name] = ev.target.value

        this.setState({filterBy},callback)
    }

    render() {
        return <section className="note=filter">
            <input type="text" name="type" placeholder="Search..." autoComplete="off" onChange={this.handleChange} />
        </section>
    }


}