import { Link } from "react-router-dom"
const NavPage = () => {
    return <div className="container">
Duoi day la link di cac trang khac:
      <br />
      <Link to='/'>List Pages</Link>
      <br />
      <Link to='/form'>Form</Link>
      <br />
      <Link to='/signin'>Sign In</Link>
      <br />
      <Link to='/home'>Home</Link>
  </div>
}

export default NavPage