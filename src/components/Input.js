import PropTypes from 'prop-types';

const Input = ({ typeOfInput, hint }) => {
  return (
  <div>
    <input type={typeOfInput} placeholder={hint} ></input>
  </div>);
};

Input.defaultProps = {
    typeOfInput: "search",
    hint: "What do you feel like exploring today?"
}

Input.propTypes = {
    typeOfInput: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired
}

export default Input;
