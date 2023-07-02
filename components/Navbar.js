import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img
            src="https://www.themealdb.com/images/logo-small.png"
            alt="Logo"
            width="200px"
            height="40px"
            className="d-inline-block align-text-top"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
