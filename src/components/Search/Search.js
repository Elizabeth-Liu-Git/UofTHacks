import PropTypes from 'prop-types';
import Button from './../Button.js'
import Input from './../Input.js'

const Search = ({typeOfButton, typeOfInput, name, clickResponse, text, hint }) => {
    return(
        <div>
            <Input />
            <Button />
        </div>
    )
}

Search.defaultProps = {
    typeOfButton: "",
    name: "",
    clickResponse: "",
    text: "Search",
    typeOfInput: "search",
    hint: "What do you feel like exploring today?"
}

Search.propTypes = {
    typetypeOfButton: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    clickResponse: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    typeOfInput: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired
}

export default Search;