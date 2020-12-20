import {Component} from 'react'

export class ProductDetails extends Component{
    render () {
      return(
          <div>
              <p>{this.props.category}</p>
              <h1>{this.props.title}</h1>
              <img src={this.props.img} alt = {this.props.title} width="500" height="600"/>
              <div>
                  <p>{this.props.description}</p>
              </div>
              <p>{this.props.rating}</p>
              <p>{this.props.price}</p>
          </div>
      )
    }
  }
