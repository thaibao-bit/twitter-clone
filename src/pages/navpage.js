import { Link } from "react-router-dom"
const NavPage = () => {
    return <div className="container">
Duoi day la link di cac trang khac:
      <br />
      <Link to='/'>Sign In</Link>
      <br />
      <Link to='/form'>Form</Link>
      <br />
      <Link to='/'>Page 3</Link>
      <br />
      <Link to='/'>Page 4</Link>
  </div>
}

export default NavPage