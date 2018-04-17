import React, {Component} from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

class IdeaForm extends Component {
  constructor() {
    super();

    this.state = {
      idea: {
        title: '',
        problem: '',
        solution: ''
      }
    };
  }

  updateIdea = (field, e) => {
    const { idea } = this.state;
    this.setState({ idea: { ...idea, [field]: e.target.value } });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("this.state.idea", this.state.idea);
    //handle form processing here....
  }

  render () {
    const { title, problem, solution } = this.state;

    return (
      <Form horizontal style={{ padding: 100 }}>
        <div>
          <h2>Add an idea</h2>
        </div>
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
            onChange={value => this.updateIdea("problem", value)}
          />
        </FormGroup>
        <FormGroup controlId="formSolution">
          <FormControl
            style={{ height: 100 }}
            componentClass="textarea"
            placeholder="Solution"
            onChange={value => this.updateIdea("solution", value)}
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
