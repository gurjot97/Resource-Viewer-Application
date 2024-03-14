import React, { Component } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

class MainContainer extends Component {

    render() {
        return(
            
            <div>

                {/*** REMOVED and MOVED into 'NavBar.js' ***
                <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="/">WEB422 - Project Portal</a>
                    </div>
                </div>
                </nav>
                */}
                <NavBar/>

                <div className="container-fluid">
                    <div className="row">

                        {/*** REMOVED and MOVED into 'SideBar.js' ***
                        <div className="col-sm-3 col-md-2  sidebar">
                        <ul className="nav nav-sidebar">
                            <li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
                        </ul>
                        <ul className="nav nav-sidebar">
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/teams">Teams</a></li>
                            <li><a href="/employees">Employees</a></li>
                        </ul>
                        </div>
                        */}
                        <SideBar highlight={this.props.sidebar}/>

                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                        
                        
                    </div>
                </div>
            </div>

        );
    }
}

export default MainContainer;