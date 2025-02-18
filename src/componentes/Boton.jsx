import "../hojas-de-estilo/Boton.css";
import PropTypes from "prop-types";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <button
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  );
}

Boton.propTypes = {
  children: PropTypes.string,
  manejarClic: PropTypes.func,
};

export default Boton;
