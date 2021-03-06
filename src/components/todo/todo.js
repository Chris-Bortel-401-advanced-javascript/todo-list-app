import UserForm from './form.js'
import TodoList from './list.js'
import SettingsContext from '../../context/settings/context.js'
import Auth from '../../context/auth/auth.js'

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';
import cookie from 'react-cookies';

const url = 'https://auth-server-cb.herokuapp.com/api/v2/todo';


export default function Todo() {

  const [refresh, triggerRefresh] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  // Auth will go around this
  async function handleForm(item) {
    const token = cookie.load('auth') || null;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      url,
      data: {
        ...item,
        complete:false
      },
    };
    try{
      await axios(config);
      triggerRefresh(!refresh);
      setError(null);
    }
    catch (error){
      setError(error.message);
    }
  }
  
  // Auth will go around this
  async function toggleComplete (id) {
    let item = list.filter(i => i._id === id)[0] || {};
    const token = cookie.load('auth') || null;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
      method: 'put',
      url: `${url}/${id}`,
      data: {
        ...item,
        complete:!item.complete,
      },
    };
    try{
      await axios(config);
      triggerRefresh(!refresh);
      setError(null);
    }
    catch(error){
      setError(error.message);
    }
  }

  // Auth will go around this
  async function deleteItem(id){
    const token = cookie.load('auth') || null;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      method: 'delete',
      url: `${url}/${id}`,
    };
    try{
      await axios(config);
      triggerRefresh(!refresh);
      setError(null);
    }
    catch(error){
      setError(error.message);
    }
  }


  // Auth will go around this
  useEffect(() => {
    const unfinishedItems = list.filter(item => !item.complete).length;
    document.title = `To Do List: ${unfinishedItems}`;  

    const getToDoList = async () => {
      const token = cookie.load('auth') || null;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
        method: 'get',
        url,
      };
      try{
        const {data} = await axios(config);
        let array = data.results;
        array.sort((a,b) => {
          return a.difficulty - b.difficulty;
        });
        setList(array);
        console.log(array);
        setError(null);
      }
      catch(error){
        setError(error.message);
      }
    };
    getToDoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);


  return (
    
    <Auth>
    <SettingsContext>
      <Container>
      <Container className = 'p-3'/>
      <h2 className = 'text-white bg-dark mt-3 p-3'>To Do List Manager ({list.filter(item => !item.complete).length})</h2>
      <Row>
      <Col xs={12} sm={12} md={6} lg={4}>
        <UserForm handler = {handleForm}/>
      </Col>
      
      <Col xs={12} sm={12} md={6} lg={8}>
        <TodoList list = {list} handleComplete={toggleComplete} handleDelete={deleteItem} error={error}/>
      </Col>
      </Row>
      </Container>
    </SettingsContext>
    </Auth>
  );
}
