import React, { Component } from 'react';
import Header from './components/ui/header.react'
import Footer from './components/ui/footer.react'
import CoreContent from './components/ui/corecontent.react'

class App extends Component {


  componentWillMount(){
    fetch("http://localhost:3030/projects")
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      console.log("Here", response.json());
    })
    .then(function(data) {
     // that.setState({ person: data.person });
    });
  }

  render() {
    return (
      <div>
        <Header
          userDisplayName={"Todo: Add users"}
        />
        <CoreContent />
        <Footer />
      </div>
    );
  }
}

export default App;
