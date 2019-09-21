import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [
        {
          id: 1,
          name: 'Frankenstein'
        },
        {
          id: 2,
          name: 'Dracula'
        },
        {
          id: 3,
          name: 'Zombie'
        }
      ]
    };
  }





  render() {
    return (
      <div className="App">
        {
          this.state.robots.map(robot => <h1 key={robot.id}>{ robot.name}</h1>)
        }
      </div>
    );
  }
}
export default App;

