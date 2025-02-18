import PropTypes from "prop-types";
import "../hojas-de-estilo/BotonClear.css";

function BotonClear(props) {
  return (
    <button className="boton-clear" onClick={props.manejarClear}>
      {props.children}
    </button>
  );
}

BotonClear.propTypes = {
  children: PropTypes.string,
  manejarClear: PropTypes.func,
};

export default BotonClear;
