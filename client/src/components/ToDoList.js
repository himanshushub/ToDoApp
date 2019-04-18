import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';




class ToDoList extends Component{

    constructor(props) {
        super(props);
        this.columns = [
            {
                Header: 'Priority',
                accessor: 'priority',
                width: 100,
                maxWidth: 100,
                minWidth: 100
            },
            {
                Header: 'ToDo',
                accessor: 'ToDo',
                style:{ 'white-space': 'unset'}
            },
            {
                Header: 'Actions',
                Cell: props => {
                    return(
                        <button onClick={()=>{this.deleteToDo(props.original)}}>Delete</button>
                    )
                },
                filterable: false,
                width: 100,
                maxWidth: 100,
                minWidth: 100
            }
        ];

    }

    deleteToDo(removeToDo){
        // console.log(removeToDo.priority);
        if (window.confirm("Are You sure want to Delete")){
            const newStateAfterdelete = this.props.auth.ToDolist.filter(eachToDo => {
                return eachToDo.priority !== removeToDo.priority;
            })
            this.props.deleteToDoAction(newStateAfterdelete);
        }// cant use this because we have to delete the ToDo from backend but you can see that how we have used the filter method
        // console.log(newStateAfterdelete);

    }

    renderContent(){
        // console.log(this.props.auth);
        switch(this.props.auth){
            case null:return "still looking"

            case false:return <h2>Please Login For your Todo List</h2>

            default: return (
                <div >
                    <h2>{this.props.auth.name}</h2>
                    <div className="fixed-action-btn">
                        <Link to={this.props.auth? '/addtodo' : '/'} className="btn-floating btn-large red">
                            <i className="large material-icons">add</i>
                        </Link>
                    </div>    
                    <ReactTable
                    columns= {this.columns}
                    data = {this.props.auth.ToDolist} //we need array of objects, here we have(this.props.auth.ToDolist)
                    filterable
                    >
                    </ReactTable>
                </div>
            )
        }
    }

// auth:
//     __v: 0
//      _id: 
//      email: 
//      googleId:​
//      name:


    render(){
         
        return(
            <div>
                ToDoList
                {this.renderContent()}
                
            </div>
        )
    }

}

function mapStateToProps(state){
    return {auth: state.auth}
}

export default connect(mapStateToProps, actions)(ToDoList);