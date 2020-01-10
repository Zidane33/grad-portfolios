import React from 'react';

class Nav extends React.Component {

    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand name" href="">Jayntha Ramasubramnayam</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="main-header">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://carleton.ca/law/people/ramasubramanyam-jayantha/">Research</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More Info
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="https://drive.google.com/file/d/12x1ObgRNsprMkzTlwH1BmBfqpTlHHBuG/view?usp=sharing" target="_blank">Resume</a>
                            <a class="dropdown-item" href="https://www.linkedin.com/in/jay-ramasubramanyam-0770a71a/" target="_blank">LinkedIn</a>
                            <a class="dropdown-item" href="mailto:Jay.Ramasubramanyam@carleton.ca">Send Me An Email</a>
                        </div>
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Nav;