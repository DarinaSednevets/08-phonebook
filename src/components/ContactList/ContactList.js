import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact } from '../../redux/Contacts/contacts-operations'
import { getFilteredContacts } from '../../redux/Contacts/contacts-selectors'
import { useEffect } from 'react';

function ContactList() {
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
        <ul>
            {filteredContacts.map(({ id, name, number }) =>
            (<li key={id} id={id}>
                {name}:{number}
                <button type="button"
                    onClick={() => dispatch(deleteContact(id))}
                >Delete
                </button>
            </li>))
            }
        </ul>
    )
}


export default ContactList;

