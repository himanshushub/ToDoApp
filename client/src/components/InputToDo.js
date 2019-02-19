import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions';



class InputToDo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            Priority: '',
            List: ''
        };
        this.handleSubmit =this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        // console.log(event.target[1].value);
        this.setState({Priority: event.target[0].value, List: event.target[1].value},
            ()=> {
                // console.log(this.state);
                // console.log(this.state.List);
                // axios.post('/api/addtodo', this.state)
                //     .then((res)=>{
                //         console.log(res);
                //     }
                // )
                this.props.newToDoAction(this.state);
            }
        )
        

        event.preventDefault();
    }

    render(){

        return(
            <div>
                Taking Input
                <form onSubmit={this.handleSubmit}>
                    Priority:
                    <input type="number" name="Priority" />
                    New Work:
                    <input type="text" name="newToDo"  />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default connect(null, actions)(InputToDo);