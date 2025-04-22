import { Link } from 'react-router-dom';
function Header() {
    return (
      <header>
        <h1>Code Wallet</h1>
        <nav>
        <Link to="/fragments">Fragments</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/info">Info</Link>
        <Link to="/new" className="new">New</Link>
        
        </nav>
      </header>
    );
  }
  
  export default Header;
  