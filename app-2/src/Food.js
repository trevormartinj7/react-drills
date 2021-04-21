import React, {Component} from 'react';

class Food extends Component{

    constructor(){
        super();
        this.state={
            foodArray: ["Chicken", "Steak", "Potatoes", "Chili Corn Dogs"]
        };
    }

    render(){

        let outputArray = this.state.foodArray;
        return(
            <div>
                <ul>
                    {outputArray.map((el, i) => {
                        return <li>{el}</li>
                    })}
                </ul>
            </div>


        )
    }

}

export default Food;