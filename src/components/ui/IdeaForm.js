import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from '../style/IdeaForm.css';
import store from "../../store";
import FormUI from "./IdeaForm/FormUI";

import {
  submitIdea,
} from '../../actions';

class IdeaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  //Passed down to FormUI
      idea: props.idea || {
        title: '',
        problem: '',
        potential_solution: '',
        isEdit: props.id != null  //Unecessarily recreated in FormUI but should be passed in from this
      },
    };
  }

  render() {
    return (
      <FormUI idea={this.props.idea} addEntry={this.props.addEntry} 
                                    startIdeasubmission={this.props.startIdeasubmission} 
                                    updateEntry={this.props.updateEntry} 
      />
    )
  }
}

//Parameters on mapStateToProps Explained: 
//State- Triggered every time theres a change to store and passes new state/store
//ideaForm - same trigger as above except rerenders IdeaForm with its passed props (only Id is passed into it)
const mapStateToProps = (state, ideaFormProps) => {
  const id = Number(ideaFormProps.id);
  const idea = state.ideaHubState.entries.find(entry => entry.id === id);

  return {idea};
};

const mapDispatchToProps = (dispatch) => {
  return {
    startIdeasubmission : (entry) => dispatch({type: 'START_IDEA_SUBMISSION'}),
    addEntry: (entry) => dispatch({type: 'SUBMIT_IDEA', payload: entry}),
    updateEntry: (entry) => dispatch({type: 'UPDATE_IDEA', payload: entry}),
  };
}

//We pass the the IdeaForm (itself) as the second function cause that's the component we want to rerender
export default connect(mapStateToProps, mapDispatchToProps)(IdeaForm);
