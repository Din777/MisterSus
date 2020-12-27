export class BookFilter extends React.Component {

    state = {
        title: '',
        fromPrice: 0,
        toPrice: 500
    }

    handleChange = ({ target }) => {
       
        this.setState({ [target.name]: target.value }, () => { this.props.onSetFilter(this.state) })
    }

    render() {
        return <section className="filters">
            <input type="text" name="title" 
            value={this.props.title}
            placeholder="filter book by name:"
            onChange={this.handleChange} />

            <input type="number" name="fromPrice"
            value={this.props.fromPrice}
            placeholder="from price"
            onChange={this.handleChange} />
            
            <input type="number" name="toPrice"
            value={this.props.toPrice}
            placeholder="to price"
            onChange={this.handleChange} />
        </section>
    }

}