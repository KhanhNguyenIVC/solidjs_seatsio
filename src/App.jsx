import { Routes, Route } from '@solidjs/router';
import { Navbar, Container, Nav } from 'solid-bootstrap';
import CountryList from './components/Country-List';
import CountryDetails from './components/Country-Detail';
import CountryAdd from './components/Country-Add';
import SeatsIO from './components/Seats-IO';
// import 'solid-devtools';

function App() {
  return (
    <>
      <Container>
        <Navbar bg="dark" expand="lg">
          <Nav.Link class="text-white" href="/">Countries</Nav.Link>
          <Nav.Link class="text-white" href="/seats-io">SeatsIO</Nav.Link>
        </Navbar>

        <Routes>
          <Route path="/" component={CountryList} />
          <Route path="/country-add" component={CountryAdd} />
          <Route path="/country-details/:id" component={CountryDetails} />
          <Route path="/seats-io" component={SeatsIO} />
        </Routes>
      </Container>
      <style>{`
        a {color:#0ea5e9}
      `}</style>
    </>
  );
}

export default App;
