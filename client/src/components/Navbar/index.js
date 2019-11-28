import React from "react";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-success">
            <h1>Google Books</h1>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ml-3">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Search</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;