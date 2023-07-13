import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Flights">Flights</Link>
        </li>
        <li>
          <Link to="/Items">Items</Link>
        </li>
      </ul>
    </div>
  );
}