import React, {Component} from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import style from '../style/IdeaForm.css';
import store from "../../store";

import {
  submitIdea,
} from '../../actions';

class IdeaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idea: {
        title: props.id || '',
        problem: '',
        potential_solution: ''
      }
    };
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

  render () {
    const { title, problem, potential_solution } = this.state.idea;

    return (
      <Form horizontal style={{ padding: 100 }}>
        <h2>Add an idea</h2>
        <FormGroup controlId="formIdeaTitle">
          <FormControl
            type="text"
            placeholder="Title"
            value={title}
            onChange={value => this.updateIdea("title", value)}
          />
        </FormGroup>
        <FormGroup controlId="formProblem">
          <FormControl
            style={{ height: 100 }}
            componentClass="textarea"
            placeholder="Problem"
            value={problem}
            onChange={value => this.updateIdea("problem", value)}
          />
        </FormGroup>
        <FormGroup controlId="formSolution">
          <FormControl
            style={{ height: 100 }}
            componentClass="textarea"
            placeholder="Solution"
            value={potential_solution}
            onChange={value => this.updateIdea("potential_solution", value)}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" onClick={this.onSubmit}>
            Submit Idea
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default IdeaForm;
