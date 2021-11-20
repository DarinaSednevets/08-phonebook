
import Form from "./components/Form/Form"
import Filter from './components/Filter/Filter';
import ContactList from "./components/ContactList/ContactList"
import "./base.css"

function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )

}

export default App;
