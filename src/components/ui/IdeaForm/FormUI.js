import React, {Component} from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import style from '../../style/IdeaForm.css';

class BaseForm extends Component {
  state = {  //Why aren't we using this.state?
    id: this.props.idea.id,
    title: this.props.idea.title,
    problem: this.props.idea.problem,
    potential_solution: this.props.idea.potential_solution,
    loadingStatus: this.props.loadingStatus,
    submissionMessage: this.props.ideaSubmitMessage 
  };

  componentWillReceiveProps(nextProps) {
    const newState = {}; 
    nextProps.idea.loadingStatus = nextProps.loadingStatus;
    nextProps.idea.submissionMessage = nextProps.ideaSubmitMessage;

    ['id', 'title', 'problem', 'potential_solution', 'loadingStatus', 'submissionMessage'].forEach(key => {
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
    const { title, problem, potential_solution, loadingStatus, submissionMessage } = this.state;
    const updateIdeaState = this.updateIdeaState;
    const loadingDisplay = loadingStatus ? "Submitting..." : "";
    //Todo:  Show/Hide logic on Add vs Edit idea in h2 below

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
            {loadingDisplay} {submissionMessage}
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
