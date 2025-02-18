import PropTypes from "prop-types";
import "../hojas-de-estilo/Pantalla.css";

function Pantalla({input}) {
  return <div className="input">{input}</div>;
}

Pantalla.propTypes = {
  input: PropTypes.string,
};

export default Pantalla;
