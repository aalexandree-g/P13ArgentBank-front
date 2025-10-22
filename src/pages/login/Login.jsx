import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken, setProfile } from '../../store/userSlice'
import { loginUser, getUserProfile } from '../../services/api'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // get the token
      const loginData = await loginUser(username, password)
      const token = loginData.body.token
      dispatch(setToken(token))
      // get user data
      const profileData = await getUserProfile(token)
      dispatch(setProfile(profileData.body))
      navigate('/profile')
    } catch (error) {
      console.error(error)
      alert('Erreur de connexion ❌')
    }
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="login__content">
          <i className="login__icon fa fa-user-circle"></i>
          <h1>Sign In</h1>

          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="login__input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="login__remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="login__button" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Login
