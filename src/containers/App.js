import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../actions';

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
         onSearchChange: (event) => dispatch(setSearchField(event.target.value))  
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
                    var topics = ['FORGET LEADS, BUILD NETWORKS','BUILD AN ECO-SYSTEM FOR US.','OMNICHANNEL ENGAGEMENT','24SEVEN – WE’RE WITH YOU ALWAYS'];
                    var rand = topics[Math.floor(Math.random() * topics.length)];
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