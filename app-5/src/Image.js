import React, {Component} from 'react'

class Image extends Component{

    constructor(props){
        super(props);

        this.state={
            Temp: "Yeah",
            image: props.link
        }
        console.log(props.link);
    }


    render(){
        return(
            <div>
                <img src={this.props.link} />
            </div>
        )
        
        
        
        
        
    }


}

export default Image;