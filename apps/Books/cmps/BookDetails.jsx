import { bookService } from "../services/bookService.js"




export class BookDetails extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        console.log('this.props:', this.props);
        this.loadBook()
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        bookService.getById(bookId).then(book => {
            this.setState({ book })
        })
    }

    colorPrice = () => {
        const { book } = this.state
        let color = '';
        if (book.listPrice.amount > 150) color = 'red';
        else if (book.listPrice.amount < 20) color = 'green';
        return color
    }

    checkBookAge = () => {
        const { book } = this.state
        let txt = '';
        let year = new Date().getFullYear();
        if (year - (book.publishedDate) > 10) txt = 'Veteran Book'
        else if (year - (book.publishedDate) < 1) txt = 'New!'
        return txt
    }

    pageCount = () => {
        const { book } = this.state
        let txt = ''
        let count = book.pageCount
        if (count > 500) {
            txt = 'Long reading';
        } else if (count > 200) {
            txt = 'Decent Reading';
        } else {
            txt = 'Light Reading';
        }
        return txt;
    }

    onClose = () => {
        this.props.history.push('/books')
    }

    showPrice = () => {
        const { book } = this.state
        let currency = book.listPrice.currencyCode
        switch (currency) {
            case 'ILS':
                return '₪'
            case 'USD':
                return '$'
            case 'EUR':
                return '€'
        }
        return currency
    }

    addReview = (review) => {
        bookService.saveReview(this.state.book, review)
            .then(book => this.setState({ book }))
        // this.loadBook()
    }
    // toggleTxt = () => {
    //     this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    // }

    render() {
        if (!this.state.book) return <h1>Loading...</h1>
        const { book } = this.state
        const saleImg = <img className="sale" src="../assets/img/saleimg.jpg" />;
        // const { isLongTxtShown } = this.state
        // let txtBtn = isLongTxtShown ? 'show less' : 'show more'

        return <div className="book-details">
            {book.listPrice.isOnSale && saleImg}
            <h1>{book.title}</h1>
            <h6>{book.subtitle}</h6>
            <h5>{book.authors}</h5>
            <h6>Published Date: {book.publishedDate}, <span>{this.checkBookAge()}</span></h6>
            <p>Description:{book.description}</p>
            <h4>{this.pageCount()}</h4>
            <h6>Categories: {book.categories}</h6>
            <img src={book.thumbnail} />
            <h6>Language: {book.language}</h6>
            <h4 className={this.colorPrice()}>{this.showPrice()}{book.listPrice.amount}</h4>
           
       
            <button onClick={this.onClose} >Close</button>
        </div>
    }


}