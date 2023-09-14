import { Card } from "solid-bootstrap"
import { A } from "@solidjs/router";

const MovieCard = (props) => {
    const movie = props.movie ?? {}

    return (
        <Card class='my-2'>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.body}</Card.Text>
                <A class="text-decoration-none" href={`/movie-details/${movie.id}`}>
                    See Details
                </A>
            </Card.Body>
        </Card>
    )
}

export default MovieCard