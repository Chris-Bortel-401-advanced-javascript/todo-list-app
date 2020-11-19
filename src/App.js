import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
import If from './components/if/if.js'
import Form from './components/todo/form.js'
import List from './components/todo/list.js'

function App() {
  return (
    <>
      <Header />
      <div>
        <h2>To Do List Manager</h2>
        <Form />
        <List />
      </div>
      < Footer />
    </>
  );
}

export default App;
