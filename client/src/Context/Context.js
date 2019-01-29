import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    cors: 'https://cors-anywhere.herokuapp.com/',
    api: 'https://api-v3.igdb.com/games'
  }
  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
