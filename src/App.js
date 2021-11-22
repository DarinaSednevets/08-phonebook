
import Form from "./components/Form/Form"
import Filter from './components/Filter/Filter';
import ContactList from "./components/ContactList/ContactList"
import "./base.css";
import { Container } from '@mui/material';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

function App() {
  return (
    <Container max-width='sm'>
      <h1>Phonebook <MenuBookRoundedIcon fontSize="large" color="inherit" /></h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  )

}

export default App;
