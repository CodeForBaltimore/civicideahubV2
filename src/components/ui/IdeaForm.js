import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from '../style/IdeaForm.css';
import store from "../../store";
import BaseForm from "./IdeaForm/BaseForm";

import {
  submitIdea,
} from '../../actions';

class IdeaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idea: props.idea || {
        title: '',
        problem: '',
        potential_solution: '',
        isEdit: props.id != null
      },
    };
  }

  render() {
    return (
      <BaseForm idea={this.props.idea} addEntry={this.props.addEntry} updateEntry={this.props.updateEntry} />
    )
  }
}

//State- Triggered every time theres a change to store and passes new state/store
//ideaForm - same trigger as above except rerenders IdeaForm with its passed props (only Id is passed into it)

const mapStateToProps = (state, ideaFormProps) => {
  const id = Number(ideaFormProps.id);
  const idea = state.entries.find(entry => entry.id === id);
  return {idea};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: (entry) => dispatch({type: 'SUBMIT_IDEA', payload: entry}),
    updateEntry: (entry) => dispatch({type: 'UPDATE_IDEA', payload: entry}),
  };
}

//We pass the the IdeaForm as the second function cause that's the component we want to rerender
export default connect(mapStateToProps, mapDispatchToProps)(IdeaForm);
