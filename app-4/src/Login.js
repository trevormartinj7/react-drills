import React, {Component} from 'react'


class Login extends Component{


    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        }
        this.loginBoxTyper = this.loginBoxTyper.bind(this)
        this.passBoxTyper = this.passBoxTyper.bind(this)
        this.alertFunc = this.alertFunc.bind(this)
    }

    loginBoxTyper(value){
        this.setState({username: value});
    }

    passBoxTyper(value){
        this.setState({password: value})
    }

    alertFunc(){
        alert("Username: " + this.state.username + " Password: " + this.state.password );
    }

    render(){
        return (
            <div>
                 <input value={this.state.username}
                onChange={(e) => this.loginBoxTyper(e.target.value)}
                />
                 <input value={this.state.password}
                onChange={(e) => this.passBoxTyper(e.target.value)}
                />
                <button onClick={this.alertFunc}>Login</button>

            </div>
        )
    }

}

export default Login;