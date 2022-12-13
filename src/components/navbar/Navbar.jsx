import React from 'react'

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                <div className="container">
                    <div className="navbar-brand">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} className="logo img-fluid" alt="Kind Heart Charity"/>
                        <span>
                            Kind Heart Charity
                            <small>Non-profit Organization</small>
                        </span>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <div className="nav-link click-scroll">Home</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link click-scroll">About</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link click-scroll">Causes</div>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link click-scroll">Volunteer</div>
                            </li>

                            <li className="nav-item dropdown">
                                <div className="nav-link click-scroll dropdown-toggle"
                                    id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">News</div>

                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><div className="dropdown-item" >News Listing</div></li>

                                    <li><div className="dropdown-item" >News Detail</div></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <div className="nav-link click-scroll" >Contact</div>
                            </li>

                            <li className="nav-item ms-3">
                                <div className="nav-link custom-btn custom-border-btn btn">Donate</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;