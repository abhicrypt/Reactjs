import React, { Component } from 'react'

class Login extends Component {
    state = {
    email :" ",
    password :" ",
    };
    emailHandler = (event) =>{
        this.setState({email:event.target.value});
    };
    passwordHandler = (event) =>{
        // console.log(event.target.value);
        this.setState({password:event.target.value});
    };
    submitHandler= (event)=>{
        event.preventDefault()
        console.log(this.state);
    }
        render() {
        return (
            <div>
                <div className="container mt-4">
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-header'>{JSON.stringify(this.state)}</div>
                                    <div className='card-body '>
                                    <form onSubmit={this.submitHandler}>
                                        <div className='form-group'>
                                            <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Email'
                                            onChange={this.emailHandler}
                                            />
                                            </div>

                                            <div className='form-group'>
                                            <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Password'
                                            onChange={this.passwordHandler} 
                                            />
                                            </div>

                                            <div className='form-group'>
                                            <input
                                            type="submit"
                                            className='Btn Btn success form-control'
                                            value="Login"

                                            />
                                            </div>
                                        
                                    </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                 
            </div>
        )
    }
}

export default Login

