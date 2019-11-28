import React, { Component } from "react";
import Wrapper from "../components/Wrapper/index";
import Navbar from "../components/Navbar/index";
import API from "../utils/API";
import Input from "../components/Input"
import Button from "../components/Button"
import { BookList, BookListItem } from "../components/BookList/booklist";
import { Container, Row, Col } from "../components/Grid/";

class Search extends Component {
    state = {
        books: [],
        title: "",
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.search(this.state.title)
            .then(res => this.setState({ books: res.data.items }))
            .then(console.log(this.state.books))
            .catch(err => console.log(err));
    };

    save = id => {

        const book = this.state.books.find(book => book.id === id);
        console.log(book.volumeInfo.title)
        alert(book.volumeInfo.title + " by " + book.volumeInfo.authors + " saved in Database")

        API.saveBook({
            title: book.volumeInfo.title,
            href: book.volumeInfo.canonicalVolumeLink,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            thumbnail: book.volumeInfo.imageLinks.thumbnail
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Wrapper>
                <Navbar />
                <h1 className="text-center">Search Books</h1>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-9 sm-10">
                                            <Input
                                                name="title"
                                                value={this.state.title}
                                                onChange={this.handleInputChange}
                                                placeholder="Search For a Book"
                                            />
                                        </Col>
                                        <Col size="xs-3 sm-2">
                                            <Button
                                                onClick={this.handleFormSubmit}
                                                type="success"
                                                className="input-lg"
                                            >
                                                Search
                      </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            {!this.state.books.length ? (
                                <h1 className="text-center">No Books to Display</h1>
                            ) : (
                                    <BookList>
                                        {this.state.books.map(book => {

                                            return (
                                                <Wrapper>
                                                    <BookListItem
                                                        key={book.id}
                                                        title={book.volumeInfo.title}
                                                        href={book.volumeInfo.canonicalVolumeLink}
                                                        author={book.volumeInfo.authors.join(", ")}
                                                        description={book.volumeInfo.description}
                                                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                                                        Button={() => (
                                                            <button
                                                                onClick={() => this.save(book.id)}
                                                                className="btn save-button  heading-subtitle ml-2"
                                                            >
                                                                Save
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
                </Container>
            </Wrapper>
        );
    }
}

export default Search;