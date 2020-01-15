import React from 'react';

class Nav extends React.Component {

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-brand name">Jay Ramasubramnayam</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="https://carleton.ca/law/people/ramasubramanyam-jayantha/">Research</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#h" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More Info
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="https://drive.google.com/file/d/12x1ObgRNsprMkzTlwH1BmBfqpTlHHBuG/view?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a>
                            <a className="dropdown-item" href="https://www.linkedin.com/in/jay-ramasubramanyam-0770a71a/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                            <a className="dropdown-item" href="mailto:Jay.Ramasubramanyam@carleton.ca">Send Me An Email</a>
                        </div>
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Nav;