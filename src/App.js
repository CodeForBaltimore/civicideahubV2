import React, { Component } from 'react';
import Header from './components/ui/header.react'
import Footer from './components/ui/footer.react'
import CoreContent from './components/ui/corecontent.react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
}

  componentWillMount(){
    var that = this;

    fetch("http://localhost:3030/projects")
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      //console.log(response.json())
      return response.json();
    })
    .then(function(data) {
      console.log(data)
      that.setState({ entries: data });
    });
  }

  render() {
    return (
      <div>
        <Header
          userDisplayName={"Todo: Add users"}
        />
        <CoreContent entries={this.state.entries}/>
        <Footer />
      </div>
    );
  }
}

export default App;
