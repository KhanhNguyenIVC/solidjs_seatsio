import { Routes, Route } from '@solidjs/router';
import { Navbar, Container, Nav, NavDropdown } from 'solid-bootstrap';
import Home from './components/Home';
import CountryList from './components/Country-List';
import CountryDetails from './components/Country-Detail';
import CountryAdd from './components/Country-Add';
import SeatsIO from './components/Seats-IO';
// import Planner from './components/Planner';
// import 'solid-devtools';

function App() {
  // const redirectBasics = (id) => {
  //   // window.location.href = "/" + id;
  //   window.location.replace("/" + id);

  // }

  return (
    <>
      <Container fluid>
        <Navbar variant="dark" bg="dark" class="rounded-bottom">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Basics"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/1">Basic Reactivity</NavDropdown.Item>
            <NavDropdown.Item href="/2">Control Flow</NavDropdown.Item>
            <NavDropdown.Item href="/3">Lifecycles</NavDropdown.Item>
            {/* <NavDropdown.Item href="/4">Bindings</NavDropdown.Item>
            <NavDropdown.Item href="/5">Props</NavDropdown.Item>
            <NavDropdown.Item href="/6">Stores</NavDropdown.Item> */}
          </NavDropdown>

          <Nav.Link class="text-white" link href="/countries">Countries</Nav.Link>
          <Nav.Link class="text-white" link href="/seats-io">SeatsIO</Nav.Link>
          {/* <Nav.Link class="text-white" link href="/planner" style={{ display: 'none' }}>Planner</Nav.Link> */}
        </Navbar>

        <Routes>
          <Route path="/" component={Home} />
          <Route path="/:id" component={Home} />
          <Route path="/countries" component={CountryList} />
          <Route path="/country-add" component={CountryAdd} />
          <Route path="/country-details/:id" component={CountryDetails} />
          <Route path="/seats-io" component={SeatsIO} />
          {/* <Route path="/planner" component={Planner} /> */}
        </Routes>
      </Container>
      <style>{`
        a {color:#0ea5e9;}
        html, body {height: 100%}
        #nav-dropdown-dark-example {color:white}
      `}</style>
    </>
  );
}

export default App;
