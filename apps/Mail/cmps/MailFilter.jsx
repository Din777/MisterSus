export class MailFilter extends React.Component {

    state = {
        filterBy: {
            subject: '',
            unread: true,
            starred: false
        }
    };


    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.filterBy);
        };

        const filterBy = { ...this.state.filterBy }
        filterBy[ev.target.subject] = ev.target.value;

        this.setState({ filterBy }, callback);
    };

    render() {
        return <section className="mail-filter">
            <input type="text" name="subject"
                value={this.state.filterBy.name}
                placeholder="Filter by subject"
                autoComplete="off"
                onChange={this.handleChange} />
        </section>;
    }

}