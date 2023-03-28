import { useEffect } from "react";
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0){
      console.log("nuevo paciente");
    }
  } , [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5  md:h-screen md:overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-3xl font-black text-center">Listado de pacientes</h2>
          <p className="text-center mt-5 mb-5 text-xl">
            Aministra tus <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>

          {pacientes.map( paciente => (
            <Paciente
              key = {paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-black text-center">No Hay Pacientes</h2>
          <p className="text-center mt-5 mb-5 text-xl">
            Comienza agregando pacientes <span className="text-indigo-600 font-bold">
            y apareceran en este lugar</span>
          </p>
        </>
      )}


    </div>
  )
}

export default ListadoPacientes
