import { bindActionCreators } from "redux";

//a reducer takes in two things
//1. action (info about what happened)
//2. copy of current state

function postComments(state=[],action){
    console.log(state,action);
    switch(action.type){
        case 'ADD_COMMENT':
        return [...state,{
            user:action.author,
            text:action.comment
        }];
        case 'REMOVE_COMMENT':
        console.log('Removing a comment');
        return [
            ...state.slice(0,action.i),
            ...state.slice(action.i +1 )
        ];
        case 'default':
        return state;
    }
    return state;
}

function comments(state=[],action){
    if(typeof action.postId !== 'undefined'){
        return{
            //take the current state
            ...state,
            //overwrite this post with a new one
            [action.postId]:postComments(state[action.postId],action)

        }

    }
    return state;
}

export default comments;