import React, { Component } from 'react';

class Sales extends Component {
  addBookPrice(price){
    this.setState({total: this.state.total + price});
  }
   
  constructor(props){
    super(props);

    this.state ={
      total: 0
    };
    this.addBookPrice = this.addBookPrice.bind(this);
  }
    render(){
      console.log(this.props.items);
      var courses = this.props.items.map((items, i)=> {
        return <Course name={items.name} price={items.price}
        key={i} addBookPrice={this.addBookPrice} active={items.active}/>
      });
      
      return(
        
        <div className="App">
          <div id="courses">
            {courses}
            <p id="total">Total <b>{this.state.total}</b></p>
          </div>
         
         
        </div>
      );
    }
  }

  class Course extends Component {
    clicker(){
      var active = !this.state.active;
      this.setState({active: active});
      this.props.addBookPrice(active ? this.props.price : -this.props.price);

    }

    constructor(props){
      super(props);
    
      this.state = {
        active: false
      };
      this.clicker =this.clicker.bind(this);
    }
    
    render(){
      return(
        <div>
          <p className={this.state.active ? 'active' :  ''} onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p>
        </div>
      );
    }
  }

  export default Sales;
  