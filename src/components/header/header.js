import {React} from 'react';

import { Navbar } from 'react-bootstrap';

import Login from '../../context/auth/login.js'


export default function Header () {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Login />
      </Navbar>
    </>
  );
}