import React from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import style from '../../style/IdeaForm.css';

const BaseForm = (props) => {

    const { title, problem, potential_solution, isEdit } = props.idea;
    const updateIdea = props.updateIdea;
    const onSubmit = props.onSubmit;

    //Todo:  Show/Hide logic on Add vs Edit idea in h2 below
    //Research how

    return (
        <Form horizontal style={{ padding: 100 }}>
            <h2>Add an idea</h2>
            <FormGroup controlId="formIdeaTitle">
                <FormControl
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={value => updateIdea("title", value)}
                />
            </FormGroup>
            <FormGroup controlId="formProblem">
                <FormControl
                    style={{ height: 100 }}
                    componentClass="textarea"
                    placeholder="Problem"
                    value={problem}
                    onChange={value => updateIdea("problem", value)}
                />
            </FormGroup>
            <FormGroup controlId="formSolution">
                <FormControl
                    style={{ height: 100 }}
                    componentClass="textarea"
                    placeholder="Solution"
                    value={potential_solution}
                    onChange={value => updateIdea("potential_solution", value)}
                />
            </FormGroup>
            <FormGroup>
                <Button type="submit" onClick={onSubmit}>
                    Submit Idea
                </Button>
            </FormGroup>
        </Form>
    );
}

export default BaseForm;
