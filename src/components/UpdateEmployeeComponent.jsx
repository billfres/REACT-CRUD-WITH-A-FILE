import React, { Component } from 'react';
//import {Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '', 
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this); 
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this); 
        this.changeEmailHandler = this.changeEmailHandler.bind(this); 
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName, 
                lastName: employee.lastName, 
                emailId: employee.emailId
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        //console.log('employee =>' + JSON.stringify(employee));
        alert('Employee updated successfully => '+ JSON.stringify(employee));

       EmployeeService.updateEmployeeById(this.state.id,employee).then( res =>{
            this.props.history.push('/employees');
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
 
    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Update An Employee</h3>
                            <div className = "card-body">
                                <form >
                                    <div className = "form-group">
                                    <label>First Name: </label>
                                    <input name="firstName" className="form-control" placeholder="First Name"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                    <label >Last Name: </label>
                                    <input name="lastName" className="form-control" placeholder="Last Name"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                    <label >Email Id: </label>
                                    <input name="emailId" className="form-control" placeholder="Email Address"
                                        value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateEmployee } style={{marginTop: "5px"}}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px",marginTop: "5px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;