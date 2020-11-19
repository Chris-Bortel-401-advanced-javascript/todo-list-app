import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'

export default function UserForm(props) {

  const [details, setDetails] = useState('');
  const [assignee, setAssignee] = useState('');
  const [difficulty, setDifficulty] = useState('');
  
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

  function handleChangeDifficulty (event) {
    const newDifficulty = event.target.value
    console.log(newDifficulty)
    setDifficulty(newDifficulty)
  }

  function handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    props.handler({details, assignee, difficulty})
    setDetails('')
    setAssignee('')
    setDifficulty('')
  }

  return (
    <>
      <Form onSubmit= {e => handleSubmit(e)}>
    
        <Form.Group controlId="formGroupDetails">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control 
                type="input" 
                value={details} 
                placeholder="Item Details" 
                onChange= {handleChangeDetails} 
                />

        </Form.Group>
        <Form.Group controlId="formGroupAssignee">
          <Form.Label>Assigned to</Form.Label>
          <Form.Control 
                type="input" 
                value={assignee} 
                placeholder="Assignee Name" 
                onChange= {handleChangeAssignee} 
                />
        </Form.Group>

        <Form.Group controlId="formBasicRangeCustom">
          <Form.Label>Range</Form.Label>
          <Form.Control 
                defaultValue="1"
                type="range"
                min="1"
                max="5"
                name="text"
                placeholder="Assignee Name"
                onChange={handleChangeDifficulty}
                />
        </Form.Group>
        
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>

  );
}