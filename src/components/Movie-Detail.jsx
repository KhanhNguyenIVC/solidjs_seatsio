import { Card, Spinner } from "solid-bootstrap";
import { createSignal, onMount } from "solid-js";
import { useParams } from "@solidjs/router";

const REST_API = 'https://jsonplaceholder.typicode.com'

const MovieDetails = (props) => {
    const id = useParams().id
    const [movieDetail, setMovieDetail] = createSignal({})
    const [loading, setLoading] = createSignal(false)

    onMount(() => {
        const getMovieDetails = async () => {
            setLoading(true)
            const res = await fetch(`${REST_API}/posts/${id}`)
            const data = await res.json()
            setMovieDetail(data)
            setLoading(false)
        }
        getMovieDetails()
    })

    return (
        <>
            <header>
                <h1>Post Detail</h1>
            </header>
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
                    movieDetail() && (
                        <>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{movieDetail().title}</Card.Title>
                                    <Card.Text>{movieDetail().body}</Card.Text>
                                </Card.Body>
                            </Card>
                        </>
                    )
                }
            </section>
        </>
    )
}

export default MovieDetails