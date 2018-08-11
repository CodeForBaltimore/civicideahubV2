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
      return response.json();
    })
    .then(function(entries) {
      that.props.addAllIdeas(entries);
    });
  }

  render() {
    // console.log('App store', store.getState())
    return (
      <BrowserRouter>
        <div>
          <Header
            userDisplayName={"Todo: Add users"}
          />
          <CoreContent
            entries={this.props.entries}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

// export default App;

const mapStateToProps = (state) => {
  return {entries: state.entries};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAllIdeas: (entries) => dispatch({type: 'ADD_ALL_IDEAS', payload: {entries}})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
