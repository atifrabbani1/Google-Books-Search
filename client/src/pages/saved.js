import React, { Component } from "react";
import Wrapper from "../components/Wrapper/index";
import Navbar from "../components/Navbar/index";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList/booklist";
import { Row, Col } from "../components/Grid/";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        console.log(this.state.books)
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .then(console.log(this.state.books))
            .catch(err => console.log(err));
    };

    deleteBook = (id) => {

        const book = this.state.books.find(book => book._id === id);
        
        API.deleteBook(book._id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Wrapper>
                <Navbar />
                <h1 className="text-center">Saved Books</h1>
                <Row>
                    <Col size="xs-12">
                        {!this.state.books.length ? (
                            <h1 className="text-center">No Books to Display</h1>
                        ) : (
                                <BookList>
                                    {this.state.books.map(book => {
                                        console.log(book.title);
                                        return (
                                            <Wrapper>
                                                <BookListItem
                                                    key={book._id}
                                                    title={book.title}
                                                    href={book.href}
                                                    author={book.author}
                                                    description={book.description}
                                                    thumbnail={book.thumbnail}
                                                    Button={() => (
                                                        <button
                                                            onClick={() => this.deleteBook(book._id)}
                                                            className="btn save-button  heading-subtitle ml-2"
                                                        >
                                                            Delete
                                                        </button>
                                                    )}
                                                />
                                            </Wrapper>
                                        );
                                    })}
                                </BookList>
                            )}
                    </Col>
                </Row>
            </Wrapper>
        );
    }
}


export default Saved;