import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';


class App extends Component {

  state = {
    searchData: {}
  }

  getData = (e) => {
    e.preventDefault();
    const data = {
      topic: document.getElementById("topic").value.trim(),
      startY: document.getElementById("sYear").value.trim(),
      endY: document.getElementById("eYear").value.trim()
    }
    console.log(data);
    this.setState({searchData: data});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search getData={this.getData}/>
        <Results />
      </div>
    );
  }
}

export default App;
