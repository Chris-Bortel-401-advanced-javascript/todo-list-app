import Header from './components/header/header.js'
// import Footer from './components/footer/footer.js'
// import If from './components/if/if.js'
import UserForm from './components/todo/form.js'
import TodoList from './components/todo/list.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'

function App() {
let [list, setList] = useState([])
// const [complete, setComplete] = useEffect(false)
// const [count, setCount] = useEffect()


function handleForm(formData){
  console.log(formData)
  const item = {...formData, _id:Math.random(), complete:false}
  setList([...list, item])
  console.log(list)
};


useEffect(() => {
  // do a filter to check h ow many items have a falsey complete status
  const unfinishedItems = list.filter(i => i.complete === false).length;
  document.title = `To Do List: ${unfinishedItems}`;

  })


function toggleComplete (id) {

  let item = list.filter(i => i._id === id)[0] || {};
  item.complete = !item.complete;
  let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
  setList(newList);

}

// function handleDocumentTitle(e) {
//   setTitle(e.target.value)
// }
  
  return (
    <>
    <Header />
    <Container>
      <Container className = 'p-3'/>
        <h2>To Do List Manager</h2>
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

// function in app that is going have a form handler function that will chnange the state of the list

//list will recieve the state of this and will automatically re-render
