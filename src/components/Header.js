// import link component
import {Link} from "react-router-dom"

const Header = (props) => {

    return (
        <header>
          <h1 className="name">Sarah Carter</h1>
          <nav>
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/about">
              <div>About</div>
            </Link>
            <Link to="/projects">
              <div>Projects</div>
            </Link>
          </nav>
        </header>
      );
}

export default Header