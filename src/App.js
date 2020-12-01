import Header from './components/header/header.js'
import Todo from './components/todo/todo.js'
import SettingsContext from './context/settings/context.js'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <>
      <SettingsContext>
        <Header />
        <Todo />
          {/* < Footer />  */}
      </SettingsContext>
    </>
  );
}
