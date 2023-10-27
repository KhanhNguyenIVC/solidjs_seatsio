import { Routes, Route } from '@solidjs/router';
import { Navbar, Container, Nav, NavDropdown, Button } from 'solid-bootstrap';
import Home from './components/Home';
import Comparison from './components/Comparison';
import ComparisonReactivity from './components/ComparisonReactivity';
import ComparisonConditional from './components/ComparisonConditional';
import CountryList from './components/Country-List';
import CountryDetails from './components/Country-Detail';
import CountryAdd from './components/Country-Add';
import SeatsIO from './components/Seats-IO';
import Error404 from './components/Error404';
import { useI18n } from '@amoutonbrady/solid-i18n';
import { basicsParam, setBasicsParam } from "../store/basic_param";
// import 'solid-devtools';

function App() {
  const setBasicsParamFn = (idParam) => {
    setBasicsParam({ ...basicsParam, id: idParam })
  }

  const [t, { locale }] = useI18n();
  const isActiveLocale = () => {
    if (locale() === 'vn') {
      return true
    } else {
      false
    }
  }

  return (
    <>
      <Container fluid>
        <Navbar variant="dark" expand="lg" bg="dark" class="rounded-bottom">
          <NavDropdown
            id="nav-dropdown-dark-example1"
            title="Basics"
            menuVariant="dark"
          >
            <NavDropdown.Item onClick={[setBasicsParamFn, 1]} link href="/1">Reactivity</NavDropdown.Item>
            <NavDropdown.Item onClick={[setBasicsParamFn, 2]} link href="/2">Control Flow</NavDropdown.Item>
            <NavDropdown.Item onClick={[setBasicsParamFn, 3]} link href="/3">Lifecycles</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link class="text-white" link href="/comparison">Comparison</Nav.Link>
          <Nav.Link class="text-white" link href="/countries">Countries</Nav.Link>
          <Nav.Link class="text-white" link href="/seats-io">SeatsIO</Nav.Link>
          <Button style={isActiveLocale() ? 'color:#00FFFFFF' : ''} variant='dark' onclick={() => { locale('vn') }}>vn</Button>
          <Button style={isActiveLocale() ? '' : 'color:#00FFFFFF'} variant='dark' onclick={() => { locale('en') }}>en</Button>
        </Navbar>

        <Routes>
          <Route path="/" component={Home} />
          <Route path="/:id" component={Home} />
          <Route path="/comparison" component={Comparison} />
          <Route path="/comparison/reactivity" component={ComparisonReactivity} />
          <Route path="/comparison/conditional" component={ComparisonConditional} />
          <Route path="/countries" component={CountryList} />
          <Route path="/country-add" component={CountryAdd} />
          <Route path="/country-details/:id" component={CountryDetails} />
          <Route path="/seats-io" component={SeatsIO} />
          <Route path="*" component={Error404} />
        </Routes>
      </Container>
      <style>{`
        a {color:#0ea5e9;}
        html, body {height: 100%}
        #nav-dropdown-dark-example1 {color:white}
        #nav-dropdown-dark-example2 {color:white}
      `}</style>
    </>
  );
}

export default App;
