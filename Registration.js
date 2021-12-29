import React, { Component } from 'react'
import { Fragment } from 'react/cjs/react.production.min'

class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
    user:{
    name:"",
    email:"",
    password:"",
    },
};
}
RegistHandler = () =>{
    console.log(this.state.user);
    Event.preventDefault();
}
    render() {
        return (
          <Fragment>
    <div className="container mt-4 ">
    <div className="row ">
        <div className ="col-md-6">
            <div className ="card">
                <div className ="card-header">
                <h3>Login</h3>
                {JSON.stringify(this.state.user)}
                </div>
                <div className ="card-body">
                    <form onSubmit={this.RegistHandler}>
                        <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="User Name"
                        onChange={(event) => {this.setState({user:{...this.state.user,name: event.target.value,},});}}
                        />
                        
                        </div>

                        <div className="form-group">
                        <input type="text" name="email"className="form-control" placeholder="Email"
                          onChange={(event) => {this.setState({user:{...this.state.user,email: event.target.value,},});}}
                        />
                        </div>

                        <div className="form-group">
                        <input type="text" name="password" className="form-control" placeholder="Password"
                          onChange={(event) => {this.setState({user:{...this.state.user,password: event.target.value,},});}}
                        />
                        </div>

                        <button className ="btn btn-success">Registration</button>
                    </form>
                    
                </div>

            </div>

        </div>
        
    </div>
</div>
          </Fragment>
        );   
    }
}

export default Registration;
