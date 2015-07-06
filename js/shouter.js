import React from 'react';

const {
  Component,
} = React;

const list = [
  'Toothbrush',
  'Cheesy Poofs',
  'Beer'
];

class GroceryList extends Component {
  render () {
    return (
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  }
};

class Shouter extends Component {
  render () {
    return (
      <div>
        <p>Hello {this.props.name}!</p>
        <span className="age">You are {this.props.age} years old</span>
        <GroceryList />
      </div>
    );
  }
};

export default Shouter;
