import React, { useState, useEffect } from 'react';
import {ListGroup} from 'react-bootstrap'

export default function TodoList(props) {

   // pass results from form 
  return(
    <>
    <ListGroup className='text-white'>
      {props.list.map(item => (
        <ListGroup.Item
          className={`${item.complete? 'bg-success':'bg-danger'}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text} -- Assignee: {item.assignee}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
    </>
  )
}