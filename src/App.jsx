import { Routes, Route } from '@solidjs/router';
import { Navbar, Container, Nav } from 'solid-bootstrap';
import Home from './components/Home';
import CountryList from './components/Country-List';
import CountryDetails from './components/Country-Detail';
import CountryAdd from './components/Country-Add';
import SeatsIO from './components/Seats-IO';
// import Planner from './components/Planner';
// import 'solid-devtools';

function App() {
  return (
    <>
      <Container>
        <Navbar bg="dark" expand="lg" class="rounded-bottom">
          <Nav.Link class="text-white" link href="/">Home</Nav.Link>
          <Nav.Link class="text-white" link href="/countries">Countries</Nav.Link>
          <Nav.Link class="text-white" link href="/seats-io">SeatsIO</Nav.Link>
          {/* <Nav.Link class="text-white" link href="/planner" style={{ display: 'none' }}>Planner</Nav.Link> */}
        </Navbar>

        <Routes>
          <Route path="/" component={Home} />
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
      `}</style>
    </>
  );
}

export default App;
