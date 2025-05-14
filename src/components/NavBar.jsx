import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">MyStore</Link>

      <div className="navbar-nav">
        <Link className="nav-link" to="/category/technology">Technology</Link>
        <Link className="nav-link" to="/category/clothing">Clothing</Link>
        <Link className="nav-link" to="/category/books">Books</Link>
      </div>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
