import React, { Component } from 'react';
import MainContainer from './MainContainer';

class Teams extends Component {

    constructor() {
        super();
        this.state = {
            teams : []
        }
    }

    componentDidMount() {
        fetch("https://rocky-taiga-45380.herokuapp.com/teams")
        .then(res => res.json())
        .then(data => {
            
            this.setState({ 
                teams: data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
         
            <MainContainer sidebar="Teams">

                {/*** The elements that are being passed as children  ***/}
                <h1 className="page-header">Teams</h1>
                    <div className="row">
                    
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Projects</th>
                                    <th>Employees</th>
                                    <th>TeamLead</th>    
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.teams.map(team => {
                                  
                                    return (
                                        <tr key={team._id}>
                                            <td>{team.TeamName}</td>
                                            <td>
                                                <ul>
                                                {team.Projects.map( project => {
                                                        return(
                                                            <li key={project._id}>{project.ProjectName}</li>
                                                        );
                                                    })}
                                                </ul>
                                            </td>
                                            <td>{team.Employees.length + ' Employees'}</td>
                                            <td>{team.TeamLead.FirstName + ' ' + team.TeamLead.LastName}</td>
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

export default Teams;