import axios from 'axios';
import { FETCH_USER, ADDTODOTYPE, DELETETODOTYPE } from './types';



export const fetchUser = ()=> {
    return function(dispatch){ 
        axios.get('/api/current_user')
            .then((res)=> {
                dispatch({ type: FETCH_USER, payload: res.data });
            })
    }
}

export const newToDoAction = (newtodo, history) => {
    return function(dispatch){
        axios.post('/api/addtodo', newtodo)
            .then((res)=>{
                // console.log(res);
                dispatch({ type: ADDTODOTYPE, payload: res.data });
                history.push('/todolist');
            }
        )
    }
}

export const deleteToDoAction = (newStateAfterdelete) => {
    return function(dispatch){
        axios.post('/api/deletetodo', newStateAfterdelete)
            .then((res)=>{
                // console.log(res);
                dispatch({type: DELETETODOTYPE, payload: res.data});
            })
    }
}