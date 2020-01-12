import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className="container my-5 bg-grey-transparent">
                <header id="main-header">
                    <div className="row d-flex justify-content-end">
                        <div className="col-lg-8">
                            <div className="move-down d-flex flex-column justify-content-center align-items-center text-center">
                                <h4 className="display-5 name m-3 text-center">Jayantha Ramasubramanyam</h4>
                                <div className="d-flex flex-row mb-4 mt-2">
                                    <div className="p-2">
                                        <a href="https://twitter.com/jay_shas" className="text-white">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <a href="https://www.facebook.com/jayantha.shastri" className="text-white">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <a href="https://www.instagram.com/shastrij/?hl=en" className="text-white">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                                <h5 className="display-5 name">About Me:</h5>
                                <p className="lead text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis ullam, illum commodi autem suscipit totam illo porro consequuntur sed nesciunt repudiandae iure est rerum?</p>
                                <p className="lead text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis ullam, illum commodi autem suscipit totam illo porro consequuntur sed nesciunt repudiandae iure est rerum?</p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
};

export default Header;