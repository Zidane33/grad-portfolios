import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className="container my-5">
                <header id="main-header">
                    <div className="row d-flex justify-content-end">
                        <div className="col-lg-6 bg-grey-transparent">
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
                                <p className="lead text-white text-justify">{`Jay Ramasubramanyam is a PhD candidate in the Department of Law and Legal Studies with a specialization in Political Economy, at Carleton University. He was the 2018-2019 Toronto Dominion Graduate Fellow in Migration and Diaspora Studies and the recipient of the 2019 Kanta Marwah Research Grant in Peace and Security. In 2017, he received the Humanitarian Response Network of Canada’s research grant to support his doctoral research.
                                                                Prior to his doctoral candidature, he was employed by the Office of the United Nations High Commissioner for Refugees (UNHCR) as a Refugee Status Determination Associate and in the International Committee of the Red Cross (ICRC) as a Protection Field Officer.
                                                                `}</p>
                                <p className="lead text-white text-justify">{`Jay is currently studying the characterization and construction of ‘refugeehood’ in India and will examine the understandings that have guided such constructions.`}</p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
};

export default Header;