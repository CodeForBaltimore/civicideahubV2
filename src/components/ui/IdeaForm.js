import React, {Component} from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
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
      var test = store.getState().entries[1];

      console.log(test);
        this.state = {
          idea: {
            title: props.id || '',
            problem: '',
            potential_solution: '',
            isEdit: props.id != null  
            }
        };
    }

    componentDidMount() {
        //This check should probably happen here
        var test = store.getState().entries;

        console.log(this.props);
    }

  updateIdea = (field, e) => {
    const { idea } = this.state;
    this.setState({ idea: { ...idea, [field]: e.target.value } });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addEntry(this.state.idea);
    this.setState({ idea: {
        title: '',
        problem: '',
        potential_solution: ''
      }
    });
  }

    render() {
        return (
            <BaseForm idea={this.state.idea} onSubmit={this.onSubmit} updateIdea={this.updateIdea} />    
        )
    }
}


export default IdeaForm;
