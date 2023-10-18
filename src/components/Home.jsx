import { A } from '@solidjs/router';

const Home = () => {
    return (
        <>
            <h1>Home page</h1>
            <p>In development progress</p>
            <p>Visit <A href='/countries'>Countries</A> or  <A href='/seats-io'>SeatsIO</A></p>
        </>
    )
}

export default Home