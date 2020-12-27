import { BookDetails } from "./cmps/BookDetails.jsx";
import { BookAdd } from "./cmps/BookAdd.jsx";
import { BookFilter } from "./cmps/BookFilter.jsx";
import { BookList } from "./cmps/BookList.jsx";
import { bookService } from "../Books/services/bookService.js";

const { Link } = ReactRouterDOM;

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: {
            title: '',
            fromPrice: 0,
            toPrice: 500
        },
       
    }


    componentDidMount() {
        console.log('mounting...');
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query()
            .then(books => this.setState({ books }));
        console.log('this.state.books',this.state.books);
    }

    getBooksForDisplay = () => {
        const { filterBy, books } = this.state;
        console.log('books', books);

        return books.filter(book => {
            const isTitleInc = book.title.toLowerCase().includes(filterBy.title.toLowerCase())
            const isPriceInc = book.listPrice.amount < filterBy.toPrice && book.listPrice.amount > filterBy.fromPrice
            return isTitleInc && isPriceInc
        })
    }

    render() {

        const booksToShow = this.getBooksForDisplay()
        // const booksToShow = this.loadBooks()
        return (
            <section className="books-app">
                <h2>MissBooks</h2>
                {/* <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} /> */}
                {/* <BookAdd /> */}
                <BookList books={booksToShow} />
            </section>

        )
    }

}