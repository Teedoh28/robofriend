import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
   
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
            altDescription={user.altDescription}
            />)
    
        })      
    );
}

export default CardList;