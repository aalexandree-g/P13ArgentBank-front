import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'

const Header = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav__logo">
        <img className="main-nav__image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav__item" to="/login">
          <i className="fa fa-user-circle"></i> Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Header
