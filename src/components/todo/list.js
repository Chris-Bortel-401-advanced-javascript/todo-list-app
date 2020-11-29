import React from 'react';
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'

import {SettingsContext} from '../../context/settings/context.js';

export default function TodoList(props) {
  
const filteredCompletedTasks = props.list.filter(item => {
  return item.complete !== true;
})

return(
  <SettingsContext.Consumer>
      { settingsContext => {
        console.log(settingsContext)
        const switchTasks = settingsContext.settings.showComplete === false ? filteredCompletedTasks : props.list;
        console.log(switchTasks)
        {/* // TODO: look up how to do sort... a.difficulty b.difficulty etc.a

        const sort = switchTasks.sort() */}

        return(

        <div>
        {/* if (i === settingsContext.maxNumber) {
            //do pagination logic here
          } */}
        { switchTasks.map(item => (

        <Toast key={item._id}>
          <Toast.Header>
            <div onClick={() => props.handleComplete(item._id)}>
                <Badge  pill variant="danger" className={`${item.complete? 'bg-danger':'bg-success'}`} key={item._id}>
                  {item.complete? 'Complete':'Pending'}
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

        </div>
        )
          
      }}
    </SettingsContext.Consumer>
  )
}