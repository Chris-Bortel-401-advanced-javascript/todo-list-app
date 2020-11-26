import React from 'react';
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'

export default function TodoList(props) {

  return(
    <>
    {props.list.map(item => (
    <Toast key={item._id}>
      <Toast.Header>
        <div onClick={() => props.handleComplete(item._id)}>
            <Badge  pill variant="danger" className={`${item.complete? 'bg-success':'bg-danger'}`} key={item._id}>
              {item.complete? 'Pending':'Complete'}
            </Badge>
        </div>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{item.assignee}</strong>

      </Toast.Header>
      <Toast.Body>{item.text}
        <span className="d-flex justify-content-end">
          <small>Difficulty: {item.difficulty} </small>
        </span>
        </Toast.Body>
    </Toast>
    ))}
  </>
  )
}