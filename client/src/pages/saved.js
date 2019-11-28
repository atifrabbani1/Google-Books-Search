import React from "react";
import Wrapper from "../components/Wrapper/index"
import Navbar from "../components/Navbar/index"

function Saved() {
    return (
        <Wrapper>
            <Navbar/>
            <h1 className="text-center">Saved Books</h1>
        </Wrapper>
    );
}

export default Saved;