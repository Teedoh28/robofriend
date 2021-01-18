import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    /*if(true){
        throw new Error('Noooo!')
    }*/
   
    return (    
        robots.map((user, index)=>{        
            return  (
            <Card 
            key={index} 
            id={user.id} 
            name={user.name} 
            username={user.username} 
            email={user.email} 
            topic={user.topic} 
            
            />)
    
        })      
    );
}

export default CardList;