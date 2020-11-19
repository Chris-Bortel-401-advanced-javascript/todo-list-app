import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'

export default function UserForm() {

  const [details, setDetails] = useState('');
  const [assignee, setAssignee] = useState('');
  
  function handleChange () {

  }

  return (
    <>
      <Form>
        <Form.Group controlId="formGroupDetails">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="input" placeholder="Item Details" />
        </Form.Group>
        <Form.Group controlId="formGroupAssignee">
          <Form.Label>Assigned to</Form.Label>
          <Form.Control type="input" placeholder="Assignee Name" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>

  );
}