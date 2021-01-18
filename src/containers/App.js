import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps =  state => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps  = (dispatch) => {
    return {
         onSearchChange: (event) => dispatch(setSearchField(event.target.value))  ,
         onRequestRobots: () => dispatch(requestRobots())
    }  
}
 

class App extends Component{

    constructor(){
        super();
        this.state = {            
                robots:[],
                //searchfield: ''            
        }     
    }
    componentDidMount(){   
        console.log(this.props.store);  
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {          
               return response.json()
            }).then(users => {               
                for(var t=0; t < users.length;t++){                  
                    var topics = ['RETARGETING & PROSPECTING','FORGET LEADS, BUILD NETWORKS','BUILD AN ECO-SYSTEM FOR US.','OMNICHANNEL ENGAGEMENT','24SEVEN – WE’RE WITH YOU ALWAYS'];
                    let rand = topics[Math.floor(Math.random() * topics.length)];
                    if(typeof users[t-1] !== 'undefined' && users[t-1].topic === rand){
                        let condition = true;
                        while (condition) {
                            rand = topics[Math.floor(Math.random() * topics.length)];
                            if(users[t-1].topic !== rand){
                                condition = false;
                            }
                        }
                    }                    
                    users[t].topic=rand;         
                }
                this.setState({robots: users});     
            });
    }

    
    render(){
        const { robots } = this.state;
        const {searchField, onSearchChange } = this.props;
        const filteredRobots  = this.state.robots.filter(robot =>{
            return robot.topic.toLowerCase().includes(searchField.toLowerCase());
        });
        return (!robots.length)? <h1>Loading...</h1>:        
           ( 
           <div className='tc'>
               <h1 className='f1'>BOT Concepts</h1>
               <SearchBox searchChange={onSearchChange}/>
               <Scroll>
                 <ErrorBoundary>
                     <CardList robots={filteredRobots}/>
                  </ErrorBoundary>
               </Scroll>
            </div>
            );
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(App);