import React, {Component} from 'react';

class Filter extends Component{
    constructor(){
        super();
        this.state={
            foodArray: ["Chicken", "Steak", "Potatoes", "Chili Corn Dogs"],
            userInput: '',
            filteredArray: []
        }
    }

    textBoxTyper(value){
        this.setState({userInput: value});
        // let workingArray = this.state.foodArray;
        // let inputString = value;
        // let tempArray = [];


        // console.log(workingArray.length)
        // console.log(inputString.length)
        // console.log(workingArray[0][0])

        // let inArray = true;


        // for(let i =0; i < workingArray.length; i++){
        //     for(let j = 0; j < inputString.length; j++){
        //         if(workingArray[i][j] !== inputString[j]){
        //             inArray = false;
        //         }
        //     }

        //     if(inArray){
        //         tempArray.push(inputString)
        //      }
        // }

        // this.setState({filteredArray: tempArray})
    }



    render(){

        
        return(

            <div>
                <input value={this.state.userInput}
                onChange={(e) => this.textBoxTyper(e.target.value)}
                />
                <ul>
                    {this.state.foodArray.filter((el) => {
                        return el.includes(this.state.userInput)
  
                    }).map((el, i) => {
                        
                        return<li>{el}</li>
                        
                    })}
                </ul>
            </div>


        )
    }
}


export default Filter

