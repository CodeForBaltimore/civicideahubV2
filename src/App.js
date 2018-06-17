import React, { Component } from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import CoreContent from './components/ui/CoreContent';
import store from './store';
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
    .then(function(data) {
      that.setState({ entries: data });
    });
  }

  addEntry = (idea) => {
    this.setState({ entries: [...this.state.entries, idea] });
    store.dispatch({type: 'SUBMIT_IDEA', payload: {title: idea.title, problem: idea.problem, potential_solution: idea.solution}})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            userDisplayName={"Todo: Add users"}
          />
          <CoreContent
            entries={this.state.entries}
            addEntry={this.addEntry}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
