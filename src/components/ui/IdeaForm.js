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

    //Todo:  Make get call on Store to get idea if id prop comes through
    // console.log('IdeaForm state', store.getState())
    //
    // console.log('idea', props.idea);
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


// export default IdeaForm;

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.id);
  const idea = state.entries.find(entry => entry.id === id);
  return {idea};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: (entry) => dispatch({type: 'SUBMIT_IDEA', payload: entry}),
    updateEntry: (entry) => dispatch({type: 'UPDATE_IDEA', payload: entry}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaForm);
