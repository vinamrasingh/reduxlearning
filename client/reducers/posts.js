import { bindActionCreators } from "redux";

//a reducer takes in two things
//1. action (info about what happened)
//2. copy of current state

function posts(state=[],action){
    console.log("Post changed");
    console.log(state,action);
    return state;
}

export default posts;