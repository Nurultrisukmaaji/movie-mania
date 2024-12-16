import { Link, useLocation } from 'react-router-dom';

export default function navbar() {
    const location = useLocation();

  return (
    <nav className='navbar navbar-expand-lg  bg-dark'>
        <div className="container">
            <Link className="navbar-brand" to="/">MovieMania</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarNav'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="">Contact</Link>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
  );
}