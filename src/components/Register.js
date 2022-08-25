import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { singup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await singup(user.email, user.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
   <div>
    {error && <p>{error}</p>}
     <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        placeholder="ejemplo@company.xd"
        onChange={handleChange}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        placeholder="********"
        id="password"
        onChange={handleChange}
      />
      <button>Registrar</button>
    </form>
   </div>
  )
}
