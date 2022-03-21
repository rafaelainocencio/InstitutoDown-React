import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './style.css';
import logo from '../../assets/instdown_logo.svg';


export default function Navegacao() {
    return (

        <Navbar className="navbar" variant="dark" expand="lg">
            <Container >
                <Link className="nav-item nav-link" to="/">
                    <img src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="Instituto Down logo"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Sobre nós" id="basic-nav-dropdown">
                            <Link className="nav-item nav-link" to="/quemsomos">
                                <NavDropdown.Item href="#action/3.1">Quem somos</NavDropdown.Item>
                            </Link>
                            <Link className="nav-item nav-link" to="/oquefazemos">
                                <NavDropdown.Item href="#action/3.2">O que fazemos</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <NavDropdown title="Capacitação" id="basic-nav-dropdown">
                            <Link className="nav-item nav-link" to="/sindromededown">
                                <NavDropdown.Item href="#action/3.1">Síndrome de Down</NavDropdown.Item>
                            </Link>
                            <Link className="nav-item nav-link" to="/capacitacaoprofissional">
                                <NavDropdown.Item href="#action/3.2">Capacitação Profissional</NavDropdown.Item>
                            </Link>
                            <Link className="nav-item nav-link" to="/ebooks">
                                <NavDropdown.Item href="#action/3.3">E-Books</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <NavDropdown title="Mercado de trabalho" id="basic-nav-dropdown">
                            <Link className="nav-item nav-link" to="/porquecontratar">
                                <NavDropdown.Item href="#action/3.1">Por que contratar?</NavDropdown.Item>
                            </Link>
                            <Link className="nav-item nav-link" to="/vagas">
                                <NavDropdown.Item href="#action/3.2">Vagas de emprego</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">

                            <Link className="nav-item nav-link" to="/registrar/empresa">
                                <NavDropdown.Item href="#action/3.1">Cadastre-se como empresa</NavDropdown.Item>
                            </Link>
                            <Link className="nav-item nav-link" to="/registrar/usuario">
                                <NavDropdown.Item href="#action/3.2">Cadastre-se como usuário</NavDropdown.Item>
                                </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}