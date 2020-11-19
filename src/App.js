import Header from './components/header/header.js'
// import Footer from './components/footer/footer.js'
// import If from './components/if/if.js'
import UserForm from './components/todo/form.js'
import TodoList from './components/todo/list.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'

function App() {
const [list, setList] = useState([])

function handleForm(formData){
  console.log(formData)
  setList([...list, formData])
  console.log(list)
};

  
  return (
    <>
    <Container>
      <Header />
      <Container className = 'p-3'/>
        <h2>To Do List Manager</h2>
      <Row>
      <Col xs={12} sm={12} md={6} lg={4}>
        <UserForm handler = {handleForm}/>
      </Col>
      
      <Col xs={12} sm={12} md={6} lg={8}>
        <TodoList listRender = {list}/>
      </Col>
      </Row>
      </Container>
      {/* < Footer />  */}
    </>
  );
}

export default App;

// function in app that is going have a form handler function that will chnange the state of the list

//list will recieve the state of this and will automatically re-render
