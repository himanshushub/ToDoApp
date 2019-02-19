import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header'
import ToDoList from './ToDoList'
import InputToDo from './InputToDo'
const Landing = () => <h2>Landing</h2>



class App extends Component{

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/todolist" component={ToDoList} />
                        <Route exact path="/addtodo" component={InputToDo} />

                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);