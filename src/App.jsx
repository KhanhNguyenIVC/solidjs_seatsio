import { Routes, Route, A } from '@solidjs/router';
import { Navbar, Container, Nav } from 'solid-bootstrap';
import MovieList from './components/Movie-List';
import MovieDetails from './components/Movie-Detail';
import SeatsIO from './components/Seats-IO';

function App() {
  return (
    <>
      <Container>
        <Navbar bg="dark" expand="lg">
            <Nav.Link class="text-white" href="/">Posts</Nav.Link>
            <Nav.Link class="text-white" href="/seats-io">SeatsIO</Nav.Link>
        </Navbar>

        <Routes>
          <Route path="/" component={MovieList} />
          <Route path="/movie-details/:id" component={MovieDetails} />
          <Route path="/seats-io" component={SeatsIO} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
