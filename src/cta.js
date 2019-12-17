import React from 'react';

class Cta extends React.Component {
    render(){
        return (
            <div className="container">
                <hr/>
                <div className="row">
                    <div className="col-lg-6 my-5">
                        <h2 className="dispaly-2 name text-center">
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt tenetur qui amet maxime."
                        </h2>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center mb-5">
                        <h5 className="display-5 text-white mb-4">
                            Find out more about my research
                        </h5>
                        <button className="btn btn-primary mb-4">
                            <a href="https://carleton.ca/mds/people/jay-ramasubramanyam/" target="_blank">Research</a>
                        </button>
                        <h5 className="display-5 text-white mb-4">
                            View My Resume
                        </h5>
                        <button className="btn btn-success">
                            <a href="https://drive.google.com/file/d/12x1ObgRNsprMkzTlwH1BmBfqpTlHHBuG/view?usp=sharing" target='_blank'>Resume</a>
                        </button>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Cta;