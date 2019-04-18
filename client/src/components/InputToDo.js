import React, { Component } from 'react';
// import '../css/Sample.less';
// import DateTimePicker from 'react-datetime-picker';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import * as Datetime from 'react-datetime';
// import axios from 'axios';



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
                var checkPriority = false;
                for(var i = 0; i<this.props.auth.ToDolist.length; i++){
                    if(this.state.Priority == this.props.auth.ToDolist[i].priority){
                        checkPriority = true;
                        // console.log(i);
                        break;
                    }
                }
                if(!checkPriority){
                    this.props.newToDoAction(this.state, this.props.history);
                }
                else{
                    alert("Priority already exist");
                }
            }
        )
        

        event.preventDefault();
    }

    renderContent(){
        switch(this.props.auth){
            case null:return "still looking"

            case false:return <h2>Please Login To add ToDo</h2>

            default: return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Priority:
                        <input type="number" name="Priority" required/>
                        New Work:
                        <input type="text" name="newToDo"  required/>
                        <div className="Sample__container">
                            <main className="Sample__container__content">
                                <Datetime />
                            </main>
                        </div>
                        <input type="submit" value="submit" />
                    </form>
                </div>
            )
        }
    }

    render(){

        return(
            <div>
                Taking Input
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {auth: state.auth}
    // console.log(state);
}
export default connect(mapStateToProps, actions)(withRouter(InputToDo));