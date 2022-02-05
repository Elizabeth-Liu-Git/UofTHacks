import PropTypes from 'prop-types';

const Button = ({ typeOfButton, name, clickResponse, text }) => {
  return (
  <div>
      <button type={typeOfButton} className={name} onclick={clickResponse}> {text} </button>
  </div>);
};


Button.defaultProps = {
    typeOfButton: "",
    name: "",
    clickResponse: void(0),
    text: "Search"
}

Button.propTypes = {
    typetypeOfButton: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button;