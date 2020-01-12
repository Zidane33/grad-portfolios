import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <footer className="text-center position-absolute w-100 p-2" style={{bottom: '0', backgroundColor: '#343a40'}}>
                <small className="name">
                    Zidane 2019
                </small>
            </footer>
        )
    }
}

export default Footer;