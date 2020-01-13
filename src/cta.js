import React from 'react';

class Cta extends React.Component {
    render(){
        return (
            <div className="container bg-grey-transparent p-4 my-5">
                <hr/>
                <div className="row pt-5">
                    <div className="col-lg-6">
                        <h2 className="dispaly-2 name text-center">
                        {`Jay is currently studying the characterization and construction of ‘refugeehood’ in India and will examine the understandings that have guided such constructions.`}
                        </h2>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center mb-5">
                        <h5 className="display-5 text-white mb-4">
                            Find out more about my research
                        </h5>
                        <button className="btn btn-primary mb-4">
                            <a href="https://carleton.ca/mds/people/jay-ramasubramanyam/" target="_blank" rel="noopener noreferrer">Research</a>
                        </button>
                        <h5 className="display-5 text-white mb-4">
                            View My Resume
                        </h5>
                        <button className="btn btn-success">
                            <a href="https://drive.google.com/file/d/12x1ObgRNsprMkzTlwH1BmBfqpTlHHBuG/view?usp=sharing" target='_blank' rel="noopener noreferrer">Resume</a>
                        </button>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Cta;