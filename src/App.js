import Header from './components/header/header.js'
// import Footer from './components/footer/footer.js'
// import If from './components/if/if.js'
import UserForm from './components/todo/form.js'
// import List from './components/todo/list.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
const [list, setList] = useState([])
function handleForm(formData){
  console.log(formData)
  setList([...list, formData])
};
  
  return (
    <>
      <Header />
      <div>
        <h2>To Do List Manager</h2>
        <UserForm handler = {handleForm}/>
        {/* <List listRender = {list}/> */}
      </div>
      {/* < Footer />  */}
    </>
  );
}

export default App;

// function in app that is going have a form handler function that will chnange the state of the list

//list will recieve the state of this and will automatically re-render
