import { Component } from "react";

class Student extends Component {
    
    constructor(props){
        super(props);
        this.state = {year:0 , color:'black'};
    }


    static getDerivedStateFromProps(nextProps , prevState){
              console.log("getDerivedStateFromProps")


        const newYear = new Date().getFullYear() - nextProps.age;
        console.log(newYear);

        if(newYear === prevState.year){
            return null ;
        }else{
            return({year:newYear});
        }
    }

    componentDidMount(){
        console.log("componentDigMount")
        setTimeout(()=> {
            this.setState({color:'red'})
        },3000);

    }

    render(){


        const {name,age} = this.props

        return(

            <div style={{backgroundColor:this.state.color}}>

               <h2>Name - {name}</h2>
               <h2>Age -{age}</h2>
               <h2>year -{this.state.year}</h2>

            </div>
        )
    }
}

export default Student ;