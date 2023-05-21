import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LanguageDropdown from "./LanguageDropdown";
import Language from "../types/Language";

function Navigation(props: {
  bgColor: string,
  languages: Language[],
  language: string,
  defaultLanguageId: Number,
  setLanguage: Function
}) {
  // The Navigation component receives props from its parent component.
  // The props are used to set the background color, languages array, selected language,
  // default language ID, and a function to set the selected language.

  return (
    <>
      <Navbar expand="lg" className="ml-auto mb-3" bg={props.bgColor} variant="dark">
        <Container>
          {/* The LinkContainer component is used from react-router-bootstrap
              to link to the home page */}
          <LinkContainer to="/">
            <Navbar.Brand>Conlang Text-To-Speech</Navbar.Brand>
          </LinkContainer>
          {/* The Navbar.Toggle and Navbar.Collapse components are used to make
              the navbar responsive */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* LinkContainer components are used to link to the Home, About, and Credits pages */}
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/credits">
                <Nav.Link>Credits</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              {/* The LanguageDropdown component is a custom component used to display a dropdown
                  menu of available languages and let the user select one */}
              <LanguageDropdown
                languages={props.languages}
                language={props.language}
                setLanguage={props.setLanguage}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
