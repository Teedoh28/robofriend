import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

 

class App extends Component{

    constructor(){
        super()
        this.state = {            
                robots:[],
                searchfield: ''            
        }
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.setState({robots:robots}); 
    }

    onSearchChange = (event) => {    

        this.setState({searchfield: event.target.value});
        
  
    }
    render(){
        console.log('render');
        const filteredRobots  = this.state.robots.filter(robots =>{
            return robots.topic.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
               <h1 className='f1'>BOT Concepts</h1>
               <SearchBox searchChange={this.onSearchChange}/>
               <CardList robots={filteredRobots}/>
            </div>
           );
    }
    
}
export default App;