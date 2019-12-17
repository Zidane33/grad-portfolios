import React from 'react';
import image from './img.jpg';

class Header extends React.Component {

    render() {
        return (
            <div className="container mt-5">
                <header id="main-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={image} alt=""/>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex flex-column bg-dark justify-content-between align-items-center">
                                <h1 className="name m-2 text-center">Jayantha Ramasubramanyam</h1>
                                <div className="d-flex flex-row mb-4 mt-2">
                                    <div className="p-2">
                                        <a href="twitter.com" className="text-white">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <a href="facebook.com" className="text-white">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <a href="instagram.com" className="text-white">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                                <h5 className="display-5 name">About Me:</h5>
                                <p className="lead text-white ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis ullam, illum commodi autem suscipit totam illo porro consequuntur sed nesciunt repudiandae iure est rerum?</p>
                                <p className="lead text-white ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis ullam, illum commodi autem suscipit totam illo porro consequuntur sed nesciunt repudiandae iure est rerum?</p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
};

export default Header;