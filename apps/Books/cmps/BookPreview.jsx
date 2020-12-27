

const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {

    function showPrice() {
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


    return <Link to={`/books/${book.id}`} >
        <article className="books-preview clean-list">
            <h2>{book.title}</h2>
            <h5>{book.authors}</h5>
            <img src={book.thumbnail} />
            <h6>{showPrice()}{book.listPrice.amount}</h6>
        </article>
    </Link>
}