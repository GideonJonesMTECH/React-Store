import {Component} from 'react';

export default class ConfirmationPage extends Component{
 constructor(props) {
  super(props);

  this.state= {confirmation : "Thank you for your purchase!"}
 }
 render(){
   return(
    <div>{this.state.confirmation}</div>
   )  
  }
}

