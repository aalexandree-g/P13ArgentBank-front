import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '../../store/userSlice'
import logo from '../../assets/argentBankLogo.png'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token, profile } = useSelector((state) => state.user)

  const handleLogout = () => {
    dispatch(clearUser())
    navigate('/')
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav__logo">
        <img className="main-nav__image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token && profile ? (
          <>
            <Link className="main-nav__item" to="/profile">
              <i className="fa fa-user-circle" aria-hidden="true"></i>{' '}
              {profile.firstName}
            </Link>
            <Link
              to="/"
              onClick={handleLogout}
              className="main-nav__item main-nav__signout"
            >
              <i className="fa fa-sign-out" aria-hidden="true"></i> Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav__item" to="/login">
            <i className="fa fa-user-circle" aria-hidden="true"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header
