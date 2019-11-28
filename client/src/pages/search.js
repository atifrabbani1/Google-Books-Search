import React from "react";
import Wrapper from "../components/Wrapper/index"
import Navbar from "../components/Navbar/index"

function Search() {
    return (
        <Wrapper>
            <Navbar/>
            <h1 className="text-center">Search Books</h1>
        </Wrapper>
    );
}

export default Search;