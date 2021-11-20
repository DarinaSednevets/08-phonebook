// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/Contacts/contacts-selectors';
import { filterContacts } from '../../redux/Contacts/contacts-acions'

function Filter() {

    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        < label >
            Find contact by name
            < input
                type="text"
                value={filter}
                onChange={event => dispatch(filterContacts(event.target.value))}
            >
            </input >
        </label >

    )
};
export default Filter;

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired
// };