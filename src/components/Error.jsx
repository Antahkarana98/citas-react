const Error = ({children}) => {
  return (
    <div>
      <p className="bg-red-700 text-white p-3 rounded-md
          text-center font-bold mb-3">{children}</p>
    </div>
  )
}

export default Error
