import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

export default function UserForm(props) {

  const [item, setItem] = useState({});
  
  function handleChangeItem(e) {
      let itemUpdate = {
        ...item,
        [e.target.name]: e.target.value,
      };
      setItem(itemUpdate);
 }

  function handleSubmit(e) {
    e.preventDefault()
    e.target.reset()
    props.handler(item)
    setItem({})
  }

  return (
    <>
      <Form onSubmit= {handleSubmit}>
    
        <Form.Group controlId="formGroupDetails">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control 
                name="text"
                type="text" 
                placeholder="Item Details" 
                onChange= {handleChangeItem} 
                />

        </Form.Group>
        <Form.Group controlId="formGroupAssignee">
          <Form.Label>Assigned to</Form.Label>
          <Form.Control 
                name="assignee"
                type="text"  
                placeholder="Assignee Name" 
                onChange= {handleChangeItem} 
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
                onChange={handleChangeItem}
                />
        </Form.Group>
        
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>

  );
}
