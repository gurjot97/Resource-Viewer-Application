import React, { Component } from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';

class Projects extends Component {

    constructor() {
        super();
        this.state = {
            projects : []
        }
    }

    componentDidMount() {
        fetch("https://rocky-taiga-45380.herokuapp.com/projects")
        .then(res => res.json())
        .then(data => {
            
            this.setState({ 
                projects: data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
         
            <MainContainer sidebar="Projects">

            {/*** The elements that are being passed as children  ***/}
            <h1 className="page-header">Projects</h1>
                <div className="row">
                
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>    
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.projects.map(project => {
                            
                            let startDate = project.ProjectStartDate !== null ? moment(project.ProjectStartDate).utc().format('LL') : 'n/a';
                            let endDate = project.ProjectEndDate !== null ? moment(project.ProjectEndDate).utc().format('LL') : 'n/a';

                            return (
                                <tr key={project._id}>
                                    <td>{project.ProjectName}</td>
                                    <td>{project.ProjectDescription}</td>
                                    <td>{startDate}</td>
                                    <td>{endDate}</td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>

                </div>

            </MainContainer>   

        );
    }
}

export default Projects;