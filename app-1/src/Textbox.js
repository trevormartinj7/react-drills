import React, {Component} from 'react';


class Textbox extends Component{

    constructor(){
        super();
        this.state = {
            userInput: '',
        }
    }

    textBoxTyper(value){
        this.setState({userInput: value});
    }


    render(){
        return(
            <div>
                <input value={this.state.userInput} 
                onChange={(e) => this.textBoxTyper(e.target.value)}
                />
                <h1>{this.state.userInput}</h1>
            </div>

        )
    }

}

export default Textbox;