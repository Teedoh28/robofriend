import React, { Component } from 'react';
import { thisExpression } from '@babel/types';

class ErrorBoundary extends Component {

    constructor(){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err , info){
        this.setState({hasError: true});

    }

    render(){
        return (this.state.hasError)?this.state.children :<h1>Oops ... That is not good</h1> ;
    }
    
}

export default ErrorBoundary;