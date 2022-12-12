import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className="site-header">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-12 d-flex flex-wrap">
                            <p className="d-flex me-4 mb-0">
                                <i className="bi-geo-alt me-2"></i>
                                Akershusstranda 20, 0150 Oslo, Norway
                            </p>

                            <p className="d-flex mb-0">
                                <i className="bi-envelope me-2"></i>

                                <div >
                                    info@company.com
                                </div>
                            </p>
                        </div>

                        <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <div className="social-icon-link bi-twitter a"></div>
                                </li>

                                <li className="social-icon-item">
                                    <div className="social-icon-link bi-facebook a"></div>
                                </li>

                                <li className="social-icon-item">
                                    <div className="social-icon-link bi-instagram a"></div>
                                </li>

                                <li className="social-icon-item">
                                    <div className="social-icon-link bi-youtube a"></div>
                                </li>

                                <li className="social-icon-item">
                                    <div className="social-icon-link bi-whatsapp a"></div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>

            <nav class="navbar navbar-expand-lg bg-light shadow-lg mb-4">
                <div class="container">
                    <div class="navbar-brand">
                        {/* <img src="images/logo.png" class="logo img-fluid" alt="Kind Heart Charity"> */}
                        <span>
                            Kind Heart Charity
                            <small>Non-profit Organization</small>
                        </span>
                    </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <div class="nav-link click-scroll">Home</div>
                            </li>

                            <li class="nav-item">
                                <div class="nav-link click-scroll">About</div>
                            </li>

                            <li class="nav-item">
                                <div class="nav-link click-scroll">Causes</div>
                            </li>

                            <li class="nav-item">
                                <div class="nav-link click-scroll">Volunteer</div>
                            </li>

                            <li class="nav-item dropdown">
                                <div class="nav-link click-scroll dropdown-toggle"
                                    id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">News</div>

                                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><div class="dropdown-item" >News Listing</div></li>

                                    <li><div class="dropdown-item" >News Detail</div></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <div class="nav-link click-scroll" >Contact</div>
                            </li>

                            <li class="nav-item ms-3">
                                <div class="nav-link custom-btn custom-border-btn btn">Donate</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar;