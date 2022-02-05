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
    clickResponse: emptyFunction(),
    text: "Search"
}

Button.propTypes = {
    typetypeOfButton: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    clickResponse: PropTypes.function.isRequired,
    text: PropTypes.string.isRequired,
}

function emptyFunction(){
    console.log("fake button")
}

export default Button;
