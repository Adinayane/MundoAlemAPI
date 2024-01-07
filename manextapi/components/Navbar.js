import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg barra-nav">
      <div className="container-fluid text-nav">
        <Link className="navbar-brand" href="/">
          <Image src="/midia/home.png" alt="Bootstrap" width="40" height="40" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          title="pagina inicial">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="">Promoções</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="">Destino</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="">Contato</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="">Entrar ↵</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;