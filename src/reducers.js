import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

const initialStateRobots = {
    isPending: false,
    robots:[],
    error:''
}

export const searchRobots = (state = initialStateSearch, action= {}) => {

    switch(action.type){
        case (CHANGE_SEARCH_FIELD):
            return Object.assign({}, state, {searchField: action.payload});

       default:
           return state;
    }

}

export const requestRobots = (state = initialStateRobots, action= {}) => {

    switch(action.type){
        case (REQUEST_ROBOT_PENDING):
            return Object.assign({}, state, {isPending: true});
        case (REQUEST_ROBOT_SUCCESS):
            for(var t=0; t < action.payload.length;t++){                  
                var topics = ['FORGET LEADS, BUILD NETWORKS','BUILD AN ECO-SYSTEM FOR US.','OMNICHANNEL ENGAGEMENT','24SEVEN – WE’RE WITH YOU ALWAYS'];
                var rand = topics[Math.floor(Math.random() * topics.length)];
                action.payload[t].topic=rand;         
            }
            return Object.assign({}, state, {robots: action.payload, isPending: false});
        case (REQUEST_ROBOT_FAILED):
            return Object.assign({}, state, {error: action.payload,isPending: false});
                   
            default:
           return state;
    }

}