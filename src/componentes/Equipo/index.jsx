import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Equipo.css";

const Equipo = (props) => {
  const { titulo, colorPrimario, colorSecundario, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const estiloSection = { backgroundColor: hexToRgba(colorPrimario, 0.4) };
  const estiloTitulo = { borderColor: colorPrimario }; //secundario

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={estiloSection}>
          <input
            type="color"
            className="input-color"
            value={colorPrimario} //secundario
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, i) => (
              <Colaborador
                datos={colaborador}
                key={i}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
