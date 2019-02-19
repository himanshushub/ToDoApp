import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component{

    renderContent(){
        switch(this.props.auth){
            case null:return "still looking"
            case false:return(
                <li><a href="/auth/google">LogIn</a></li>
            )
            default: return(
                <div>
                    <ul>
                        <li>
                            {this.props.auth.name}
                        </li>
                        <li>
                            <a href="/api/logout">LogOut</a>
                        </li>
                    </ul>
                </div>
            )
        }
    }


    render(){
        // console.log(this.props.auth);
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth? '/todolist' : '/'} className="left brand-logo">
                        ToDoApp
                    </Link>
                    <ul className="right">
                            {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {auth: state.auth};
}

export default connect(mapStateToProps)(Header);