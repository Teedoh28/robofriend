import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

 

class App extends Component{
    
    constructor(){
        super()
        this.state = {            
                robots:robots,
                searchField: ''            
        }
    }
    render(){
        return (
            <div className='tc'>
               <h1>BOT Concepts</h1>
               <SearchBox />
               <CardList robots={robots}/>
            </div>
           );
    }
    
}
export default App;