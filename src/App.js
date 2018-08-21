import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import CoreContent from './components/ui/CoreContent';
import { BrowserRouter} from 'react-router-dom'

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        entries: [],
        config:{
          loading: false
        }
    };
  }

  componentWillMount(){
    var that = this;

    fetch("http://localhost:3030/projects")
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(entriesRetrieved) {
      
      var ideaHubState = {
            entries: entriesRetrieved,
            config:{
              loading: false
            }
          };

      that.props.addAllIdeas(ideaHubState);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            userDisplayName={"Todo: Add users"}
          />
          <CoreContent
            entries={this.props.state.entries}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

// export default App;

const mapStateToProps = (state) => {
  return {state: state.ideaHubState};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAllIdeas: (initialSetup) => dispatch({type: 'ADD_ALL_IDEAS', payload: {initialSetup}})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
