const Paciente = ({paciente, setPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas } = paciente;

  return (
    <div className="mx-4 my-5 bg-white shadow-md rounded-lg py-10 px-4">

      <p className="font-bold mb-3 uppercase text-gray-700">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 uppercase text-gray-700">
        Nombre del Propietario: <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 uppercase text-gray-700">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha de Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 uppercase text-gray-700">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="mt-10 flex justify-between">
        <button
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
        uppercase rounded-lg"
        onClick={() => setPaciente(paciente)}
        >Editar</button>

        <button
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
        uppercase rounded-lg"
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente
