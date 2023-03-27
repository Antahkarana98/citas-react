import { useState, useEffect } from "react";

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-5">
        Añade pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre de la mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre del propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

          />
        </div>

        <div className="mb-5">
          <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">
              Email
          </label>
          <input
            id="Email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

          />
        </div>

        <div className="mb-5">
          <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
              Alta
          </label>
          <input
            id="Alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="Sintomas"
            placeholder="Describe los Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="">
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase
            font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
          />

        </div>
      </form>
    </div>
  )
}

export default Formulario
