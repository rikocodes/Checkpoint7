import React from 'react';


export default class Improvebutton extends React.Component{

    render() {
        return <button
           onClick={this.props.onClick}>
           {this.props.children}
           </button>
             
        
    }

    }
    
