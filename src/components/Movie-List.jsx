import { Col, Form, Spinner, Row } from "solid-bootstrap";
import { createSignal, onMount, createEffect } from "solid-js";
import MovieCard from "./Movie-Card";

const REST_API='https://jsonplaceholder.typicode.com'

const MovieList = () => {
    const [movies, setMovies] = createSignal([])
    const [searchWord, setSearchWord] = createSignal('All')
    const [loading, setLoading] = createSignal(false)

    onMount(() => {
        console.log('onMount event')
    })

    createEffect(() => {
        console.log('effect event')
        const getMovies = async () => {
            setLoading(true)
            const res = await fetch(`${REST_API}/posts`)
            const data = await res.json()
            setMovies(data)
            setLoading(false)
        }
        getMovies()
    })

    const handleSearch = async (event) => {
        setSearchWord(event.target.value)
        setLoading(true)
        if ((event.target.value).length === 0) {
            const res = await fetch(`${REST_API}/posts`)
            const data = await res.json()
            setMovies(data)

        } else {
            const res = await fetch(`${REST_API}/posts?userId=${searchWord()}`)
            const data = await res.json()
            setMovies(data)
        }
        setLoading(false)
    }

    return (
        <>
            <header>
                <h1>Posts List</h1>
            </header>

            <section>
                <Form.Group class="mb-3">
                    <Form.Control type="search" placeholder="Search Group Post (ex:1 to 10)" value={searchWord()} onChange={(event) => handleSearch(event)} />
                </Form.Group>
            </section>

            <section>
                {
                    loading() && (
                        <div class="text-center">
                            <Spinner animation="border" role="status" variant="dark" />
                            <h5>Loading...</h5>
                        </div>
                    )
                }

                {
                    movies() && movies().length > 0 ? (
                        <Row>
                            <For each={movies()}>{(movie) =>
                                <Col sm={12} md={3}>
                                    <MovieCard key={movie.id} movie={movie} />
                                </Col>
                            }</For>
                        </Row>
                    ) : (
                        <p>No data found</p>
                    )
                }
            </section>
        </>
    )
}

export default MovieList