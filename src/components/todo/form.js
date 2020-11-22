import React from 'react';
import { Form, Button, Card } from 'react-bootstrap'
import useForm from '../hooks/hooksForm';

export default function UserForm(props) {
  
  const [handleSubmit, handleChange, items] = useForm(callUseForm);

  function callUseForm(expect){
    props.handler(expect)
  }

  return (
    <>
      <Form onSubmit= {handleSubmit}>
        <Card>
          <Card.Body>
            <Card.Title>Add To Do Item</Card.Title>

          
          <Form.Group controlId="formGroupDetails">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control 
                  name="text"
                  type="text" 
                  placeholder="Item Details" 
                  onChange= {handleChange} 
                  />

          </Form.Group>
          <Form.Group controlId="formGroupAssignee">
            <Form.Label>Assigned to</Form.Label>
            <Form.Control 
                  name="assignee"
                  type="text"  
                  placeholder="Assignee Name" 
                  onChange= {handleChange} 
                  />
          </Form.Group>

          <Form.Group controlId="formBasicRangeCustom">
            <Form.Label>Range</Form.Label>
            <Form.Control 
                  defaultValue="1"
                  type="range"
                  min="1"
                  max="5"
                  name="range"
                  placeholder="Assignee Name"
                  onChange={handleChange}
                  />
          </Form.Group>
          
          <Button variant="primary" type="submit">Submit</Button>
          </Card.Body>
        </Card>
      </Form>
    </>

  );
}
