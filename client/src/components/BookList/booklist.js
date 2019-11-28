import React from "react";
import { Container, Row, Col } from "../Grid";
import Thumbnail from "../Thumbnail";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}


export function BookListItem({
    thumbnail = "https://placehold.it/300x300",
    title,
    author,
    href,
    description
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>Author: {author}</p>
                        <p>Description: {description}</p>
                        <a href={href} rel="noreferrer noopener" target="_blank" >Go to Book!</a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}