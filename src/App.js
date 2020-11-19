import Header from './components/header/header.js'
// import Footer from './components/footer/footer.js'
// import If from './components/if/if.js'
import UserForm from './components/todo/form.js'
// import List from './components/todo/list.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  

  // const [history, setHistory] = useState('')


  // handleForm(responseObj, historyObj ) {
  //   let isUnique = false;
  //     history.forEach( obj => {
  //     if (obj.method === historyObj.method && obj.textarea === historyObj.textarea && obj.input === historyObj.input) {
  //       isUnique = true;
  //     }
  //   })
  
  return (
    <>
      <Header />
      <div>
        <h2>To Do List Manager</h2>
        <UserForm/>
        {/* <List /> */}
      </div>
      {/* < Footer />  */}
    </>
  );
}

export default App;

// function in app that is going have a form handler function that will chnange the state of the list

//list will recieve the state of this and will automatically re-render
