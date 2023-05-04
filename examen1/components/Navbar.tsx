import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

type Props = {
  handleSearch: () => Promise<void>;
  handlePersonal: () => void;
  activeTab: string;
};

const MyNavbar = ({ handleSearch, handlePersonal, activeTab }: Props) => {
  return (
    <Navbar bg="Dark" expand="lg">
      <Navbar.Brand href="#home"><img src="/Logo.png" alt="foto logo" width={300} height={300} style={{width: "150px", height: "150px"}}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={activeTab}>
          <Nav.Link href="#home" eventKey="home" onClick={() => window.location.href = window.location.origin}>
            Home
          </Nav.Link>
          <Nav.Link href="#link1" eventKey="personal" onClick={handlePersonal}>
            Personal Presentation
          </Nav.Link>
          <Nav.Link href="https://github.com/AaronBarboza" eventKey="repositories" onClick={handleSearch}>
            Repositories
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
