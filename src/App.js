import Header from './components/header/header.js'
import UserForm from './components/todo/form.js'
import TodoList from './components/todo/list.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import superagent from 'superagent';



function App() {

let [list, setList] = useState([])

function handleForm(formData){
  const item = {...formData, _id:Math.random(), complete:false}
  setList([...list, item])
};

useEffect(() => {
  const unfinishedItems = list.filter(i => i.complete === false).length;
  document.title = `To Do List: ${unfinishedItems}`;

  //make a superagent request to api to get all todo item 
  async function handleSuperagent() {
    const response = await superagent.get('https://auth-server-cb.herokuapp.com/api/v1/todo')
    const toDoItems = response.body.results;
    console.log(toDoItems)

  }
  handleSuperagent();
})

function toggleComplete (id) {
  let item = list.filter(i => i._id === id)[0] || {};
  item.complete = !item.complete;
  let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
  setList(newList);
}

  return (
    <>
    <Header />
    <Container>
      <Container className = 'p-3'/>
        <h2 className = 'text-white bg-dark mt-3 p-3'>To Do List Manager ({list.filter(item => !item.complete).length})</h2>
      <Row>
      <Col xs={12} sm={12} md={6} lg={4}>
        <UserForm handler = {handleForm}/>
      </Col>
      
      <Col xs={12} sm={12} md={6} lg={8}>
        <TodoList list = {list} handleComplete={toggleComplete}/>
      </Col>
      </Row>
      </Container>
      {/* < Footer />  */}
    </>
  );
}

export default App;
