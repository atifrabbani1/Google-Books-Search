import React, { Component } from "react";
import Wrapper from "../components/Wrapper/index";
import Navbar from "../components/Navbar/index";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Wrapper>
                <Navbar />
                <h1 className="text-center">Saved Books</h1>
                <ul>
                    {this.state.books.map(book => (
                        <li key={book._id}>
                            <Link to={"/books/" + book._id}>
                                <h2>{book.title}</h2>
                                <h4>Author: {book.author}</h4>
                                <p>Description: {book.description}</p>
                                <img src={book.image} alt="Book Image"/>
                                <a href= {book.link}>Link to book</a>
                            </Link>
                        </li>

                    ))}
                </ul>
            </Wrapper>
        );
    }
}


export default Saved;