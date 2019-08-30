import React, {Component} from 'react';
import CardList from './CardList';
//import {robots} from './robots';
import SearchBox from './SearchBox';

 

class App extends Component{

    constructor(){
        super()
        this.state = {            
                robots:[],
                searchfield: ''            
        }
     
    }

    componentDidMount(){
     
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
          
               return response.json()
            })
            .then(users => {
               
                for(var t=0; t < users.length;t++){                  
                    var topics = ['FORGET LEADS, BUILD NETWORKS','BUILD AN ECO-SYSTEM FOR US.','OMNICHANNEL ENGAGEMENT','24SEVEN – WE’RE WITH YOU ALWAYS'];
                    var rand = topics[Math.floor(Math.random() * topics.length)];
                    users[t].topic=rand;         
                }
                this.setState({robots: users});
     
            });
    }

    onSearchChange = (event) => {    

        this.setState({searchfield: event.target.value});
        
  
    }
    render(){
        
        const filteredRobots  = this.state.robots.filter(robots =>{
            return robots.topic.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>

        }else{
        return (
            <div className='tc'>
               <h1 className='f1'>BOT Concepts</h1>
               <SearchBox searchChange={this.onSearchChange}/>
               <CardList robots={filteredRobots}/>
            </div>
           );
        }
    }
    
}
export default App;