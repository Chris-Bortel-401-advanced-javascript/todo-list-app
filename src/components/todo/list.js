import React, {useContext} from 'react';
import Toast from 'react-bootstrap/Toast'
import Badge from 'react-bootstrap/Badge'
import Auth from '../../context/auth/auth.js'

import {LoginContext} from '../../context/auth/context.js';
import {SettingsContext} from '../../context/settings/context.js';

export default function TodoList(props) {
  

  // const settingsContext = useContext(SettingsContext);
  const loginContext = useContext(LoginContext);

const filteredCompletedTasks = props.list.filter(item => {
  return item.complete !== true;
})

function canDelete(users) {
  console.log(users);
  return users.permissions.includes('delete')
}

return(
  <SettingsContext.Consumer>
      { settingsContext => {
        const switchTasks = settingsContext.settings.showComplete === false ? filteredCompletedTasks : props.list;

        return(
        <div>
          { switchTasks.map(item => (

            <Toast key={item._id} onClose={() => props.handleDelete(item._id)}>
              <Toast.Header closeButton={canDelete(loginContext.users)}>
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