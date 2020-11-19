import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'

export default function UserForm(props) {

  const [details, setDetails] = useState('');
  const [assignee, setAssignee] = useState('');
  // const [difficulty, setDifficulty] = useState('');
  
  function handleChangeDetails(event) {
    const newDetails = event.target.value
    console.log(newDetails)
    setDetails(newDetails)
  }
  function handleChangeAssignee (event) {
    const newAssignee = event.target.value
    console.log(newAssignee)
    setAssignee(newAssignee)
  }

  function handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    props.handler({details, assignee})
    setDetails('')
    setAssignee('')
  }

  return (
    <>
      <Form onSubmit= {e => handleSubmit(e)}>
    
        <Form.Group controlId="formGroupDetails">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="input" value={details} onChange= {handleChangeDetails} placeholder="Item Details" />

        </Form.Group>
        <Form.Group controlId="formGroupAssignee">
          <Form.Label>Assigned to</Form.Label>
          <Form.Control type="input" value={assignee} onChange= {handleChangeAssignee} placeholder="Assignee Name" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>

  );
}