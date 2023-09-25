import { Card } from "solid-bootstrap";
import { A } from "@solidjs/router";

const CountryCard = (props) => {
    const country = props.country ?? {}

    return (
        <Card class='my-2 shadow-sm'>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>Country Code: {country.country_code}</Card.Text>
                <Card.Text>ISO Codes: {country.iso_codes}</Card.Text>
                <Card.Text>Population: {country.population}</Card.Text>
                <Card.Text>Area Km2: {country.area_km2}</Card.Text>
                <Card.Text>GDP $USD: {country.gdp}</Card.Text>
                <A class="text-decoration-none" href={`/country-details/${country.id}`}>
                    See Details
                </A>
            </Card.Body>
        </Card>
    )
}

export default CountryCard