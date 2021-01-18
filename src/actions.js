import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED
} from './constants';


export const setSearchField = (text) => { 
    return ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
}

export const requestRobots = () =>  (dispatch) =>{
    dispatch({'type':REQUEST_ROBOT_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({'type': REQUEST_ROBOT_SUCCESS, 
    'payload': data
    
}))
    .catch(error => dispatch({'type': REQUEST_ROBOT_FAILED,'payload': error}))
}

const addTopic = (users_data) =>{
    for(var t=0; t < users_data.length;t++){                  
        var topics = ['RETARGETING & PROSPECTING','FORGET LEADS, BUILD NETWORKS','BUILD AN ECO-SYSTEM FOR US.','OMNICHANNEL ENGAGEMENT','24SEVEN – WE’RE WITH YOU ALWAYS'];
        let rand = topics[Math.floor(Math.random() * topics.length)];
        if(typeof users_data[t-1] !== 'undefined' && users_data[t-1].topic === rand){
            let condition = true;
            while (condition) {
                rand = topics[Math.floor(Math.random() * topics.length)];
                if(users_data[t-1].topic !== rand){
                    condition = false;
                }
            }
        }                    
        users_data[t].topic=rand;         
    }
}