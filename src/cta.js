import React from 'react';

class Cta extends React.Component {
    render(){
        return (
            <div className="container">
                <hr/>
                <div className="row">
                    <div className="col">
                        <h2 className="dispaly-2 name">
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt tenetur qui amet maxime."
                        </h2>
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <h5 className="display-5 text-white mb-4">
                            Find out more about my research
                        </h5>
                        <button className="btn btn-primary mb-4">
                            Research
                        </button>
                        <h5 className="display-5 text-white mb-4">
                            Download My Resume
                        </h5>
                        <button className="btn btn-success">
                            Resume
                        </button>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Cta;