import React from 'react';

class Hero extends React.Component {

    render() {
        return (
            <div className="container my-5">
                <div className="d-flex justify-content-center">
                    <div id="jay">
                    </div>
                    <div className="bg-grey-transparent item d-flex justify-content-center flex-column">
                        <h4 className="display-5 name m-3 text-center">Jay Ramasubramanyam</h4>
                        <div className="d-flex flex-row mb-4 mt-2 justify-content-center">
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
                        <h5 className="display-5 name text-center">About Me:</h5>
                        <p className="lead text-white text-justify">{`Jay Ramasubramanyam is a PhD candidate in the Department of Law and Legal Studies with a specialization in Political Economy, at Carleton University. He was the 2018-2019 Toronto Dominion Graduate Fellow in Migration and Diaspora Studies and the recipient of the 2019 Kanta Marwah Research Grant in Peace and Security. In 2017, he received the Humanitarian Response Network of Canada’s research grant to support his doctoral research.
                                                        `}</p>
                        <p className="lead text-white text-justify">{`Prior to his doctoral candidature, he was employed by the Office of the United Nations High Commissioner for Refugees (UNHCR) as a Refugee Status Determination Associate and in the International Committee of the Red Cross (ICRC) as a Protection Field Officer.
                        `}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Hero;