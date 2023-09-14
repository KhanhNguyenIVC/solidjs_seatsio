import { SeatsioClient, Region } from "seatsio";
import { createSignal, onMount } from "solid-js";
import "./Seats-IO.css";

const SeatsIO = () => {
    const secretWorkSpaceKey = "fb329dc8-07ba-47e5-9b10-0757ca627f4d"
    const publicWorkSpaceKey = "c6f75c47-8d75-41ce-b0e4-e25ca0e9302a"
    const eventKeyChart = "8386cd67-3317-4518-b2df-84d905988877"
    const [ticketSelected, setTicketSelected] = createSignal([])

    // Get seats data
    const pricing = [
        {
            // PREMIUM
            category: 1,
            ticketTypes: [
                {
                    ticketType: "Adult",
                    price: 110000,
                    label: "For adults",
                    description: "Seating size: 12inch seat(56 cm)",
                },
                {
                    ticketType: "Child",
                    price: 95000,
                    label: "For children",
                    description: "Seating size: 9.8inch seat(25 cm)",
                },
            ],
        },
        {
            // STANDARD
            category: 2,
            ticketTypes: [
                {
                    ticketType: "Adult",
                    price: 90000,
                    label: "For adults",
                    description: "Seating size: 12inch seat(56 cm)",
                },
                {
                    ticketType: "Child",
                    price: 75000,
                    label: "For children",
                    description: "Seating size: 9.8inch seat(25 cm)",
                },
            ],
        },
        { category: 3, price: 50000, originalPrice: 110000 },
    ]

    // Config to enable filter categories
    const categoryFilter = {
        enabled: true,
        multiSelect: true,
        zoomOnSelect: true,
    }

    // Format number as currency
    const priceFormatter = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price)
    }

    const onObjectSelected = (object, selectedTicketType) => {
        let itemSelected = {
            id: object.id,
            price: selectedTicketType.price,
            ticketType: selectedTicketType.ticketType,
            category: {
                key: object.category.key,
                label: object.category.label,
            }
        }
        setTicketSelected(ticketSelected => [itemSelected, ...ticketSelected])
        console.log(ticketSelected());
    }

    onMount(() => {
        const createChart = () => {
            console.log('create SeatsIO');
            new seatsio.SeatingChart({
                divId: "chart",
                workspaceKey: publicWorkSpaceKey,
                event: eventKeyChart,
                pricing: pricing,
                priceFormatter: priceFormatter,
                categoryFilter: categoryFilter,
                language: "en",
                loading: "<div class='lds-dual-ring'></div><h5>Loading...</h5>",
                fitTo: 'widthAndHeight',
                onObjectSelected: onObjectSelected
            }).render()
            console.log('SeatsIO is created');
        }
        createChart()
    })

    return (
        <>
            <h1>Seats IO Chart</h1>
            <div id="chart" class="seatsio-chart"></div>
            <h5>Tickets have selected</h5>
            {
                ticketSelected().length > 0 ? (
                    <div class="card-booked">
                        <button>Book</button>
                        <ul>
                            <For each={ticketSelected()}>{(ticket) =>
                                <li>
                                    {ticket.id}
                                </li>
                            }</For>
                        </ul>
                    </div>
                ) : (
                    <p>There's no ticket selected</p>
                )
            }
        </>
    )
}

export default SeatsIO