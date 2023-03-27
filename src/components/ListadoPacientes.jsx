import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5  md:h-screen md:overflow-y-scroll">

      <h2 className="text-3xl font-black text-center">Listado de pacientes</h2>
      <p className="text-center mt-5 mb-5 text-xl">
        Aministra tus <span className="text-indigo-600 font-bold">pacientes y citas</span>
      </p>

      {pacientes.map( (paciente, index) => (
        <Paciente
          paciente={paciente}
          key={index}
        />


      ))}

    </div>
  )
}

export default ListadoPacientes
