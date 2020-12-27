
import { bookService } from "../services/bookService.js";


export class BookAdd extends React.Component {

    state = {
        bookSearch: '',
        searchResults: []
    }

    onInputChange = (ev) => {
        const value = ev.target.value
        this.setState({
            bookSearch: value
        })
        bookService.getAns()
            .then(ans => this.setState({ searchResults: ans }))
    }

    onAddBook = (book) => {
        bookService.addNewBook(book)
          
    }

    render() {

        const results = this.state.searchResults
        console.log('results', results);
        return (<section className="book-search">
            <label htmlFor="search-bar">Search for a book:</label>
            <input value={this.state.bookSearch} type="text" onChange={this.onInputChange} />
            <ul className="results-list">
                {results.map(book =>
                    <li key={book.id}>
                        <h3>{book.volumeInfo.title}</h3>  <button onClick={() => this.onAddBook(book)}>+</button>
                    </li>
                )}
            </ul>
        </section>
        )
    }






}
