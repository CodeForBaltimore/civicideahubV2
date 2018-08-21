import React from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import style from '../../style/IdeaForm.css';


class BaseForm extends React.Component {
  state = {  //Why aren't we using this.state?
    id: this.props.idea.id,
    title: this.props.idea.title,
    problem: this.props.idea.problem,
    potential_solution: this.props.idea.potential_solution,
  };

  //TODO:  Figure out if this method below is needed.  Doesn't appear necessary.
  componentWillReceiveProps(nextProps) {
    const newState = {};    
    ['id', 'title', 'problem', 'potential_solution'].forEach(key => {
      if (nextProps.idea[key] !== this.state[key]) {
        newState[key] = nextProps.idea[key];
      }
    });
    this.setState(newState);
  }

  updateIdeaState = (field, event) => {
    const input = event.target;
    this.setState({[field]: input.value});
  }

  onSubmit = (event) => {
    event.preventDefault();

    const idea = this.state;
    const newIdea = idea.id === null;

    if (newIdea) {
      this.props.addEntry(idea);
      this.setState({
        title: '',
        problem: '',
        potential_solution: '',
      });
    }
    else {
      this.props.updateEntry(idea);
    }
  }

  render() {
    const {isEdit} = this.props;
    const { title, problem, potential_solution } = this.state;
    const updateIdeaState = this.updateIdeaState;

    //Todo:  Show/Hide logic on Add vs Edit idea in h2 below
    //Research how

    return (
      <Form onSubmit={this.onSubmit} horizontal style={{ padding: 100 }}>
        <h2>Add an idea</h2>
        <FormGroup controlId="formIdeaTitle">
          <FormControl
            type="text"
            placeholder="Title"
            value={title || ''}
            onChange={value => updateIdeaState("title", value)}
          />
        </FormGroup>
        <FormGroup controlId="formProblem">
          <FormControl
            style={{ height: 100 }}
            componentClass="textarea"
            placeholder="Problem"
            value={problem || ''}
            onChange={value => updateIdeaState("problem", value)}
          />
        </FormGroup>
        <FormGroup controlId="formSolution">
          <FormControl
            style={{ height: 100 }}
            componentClass="textarea"
            placeholder="Solution"
            value={potential_solution || ''}
            onChange={value => updateIdeaState("potential_solution", value)}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit">
            Submit Idea
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

BaseForm.defaultProps = {
  idea: {
    id: null,
    title: '',
    problem: '',
    potential_solution: '',
  },
};

export default BaseForm;
