import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
         <header class="header-wrapper">
            <nav class="navbar navbar-expand-lg py-5">
             <div class="container">
                <a class="navbar-brand" href="#">Meklit Hotel</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div class="navbar-nav menu-navbar-nav">
                    <Link to="/">
                    <a class="nav-item nav-link active" href="#">HOTEL <span class="sr-only">(current)</span></a>
                    </Link>
                    <Link to="/offers">
                    <a class="nav-item nav-link" href="#">OFFERS</a>
                    </Link>
                    <Link to="/rooms">
                    <a class="nav-item nav-link" href="#">ROOMS</a>
                    </Link>
                    <Link>
                    <a class="nav-item nav-link" href="#">EAT AND DRINKS</a>
                    </Link>
                    <Link>
                    <a class="nav-item mt-3 mt-lg-0 nav-link disabled" href="#">702-234-5867</a>
                    </Link>
                        
                    </div>
                </div>
            </div>
            </nav>
            </header>
        </div>
    )
}

export default Navbar