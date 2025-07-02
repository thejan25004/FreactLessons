import { Component } from "react";

class Sttudent extends Component{

    constructor(props){
        super(props);
    }


    render(){

        const {name , age} = this.props

        return(
            <div>
                <h2>{name}</h2>
                <h2>{age}</h2>
            </div>
        )

    }

}

export default Sttudent