import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'

export default function UserForm(props) {

  const [details, setDetails] = useState('');
  const [assignee, setAssignee] = useState('');
  
  function handleChangeDetails(value) {
    console.log(details, value)
    setDetails(value)
  }
  function handleChangeAssignee (value) {
    console.log(assignee, value)
    setAssignee(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.handler({details, assignee})
  }

  return (
    <>
      <Form onSubmit= {e => handleSubmit(e)}>
    
        <Form.Group controlId="formGroupDetails">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="input" value={details} onChange= {e => handleChangeDetails(e.target.value)} placeholder="Item Details" />

        </Form.Group>
        <Form.Group controlId="formGroupAssignee">
          <Form.Label>Assigned to</Form.Label>
          <Form.Control type="input" value={assignee} onChange= {e => handleChangeAssignee(e.target.value)} placeholder="Assignee Name" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>

  );
}