import { Col, Form, Spinner, Row, Button } from "solid-bootstrap";
import { createSignal, onMount, createEffect, For } from "solid-js";
import CountryCard from "./Country-Card";
import { createClient } from '@supabase/supabase-js';
import { LightPaginationNav, paginate } from 'solid-paginate';
import 'solid-paginate/styles';

const CountryList = () => {
    const [countries, setCountries] = createSignal([])
    const [searchWord, setSearchWord] = createSignal('')
    const [loading, setLoading] = createSignal(false)
    const supabase = createClient('https://vxudiapfzrpthkojjahj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4dWRpYXBmenJwdGhrb2pqYWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1NjQ3ODAsImV4cCI6MjAwMjE0MDc4MH0.hd9QH9zb0_e1lkztnvEjaa6wntSYKthtZMdyp8s3oZw')
    const [currentPage, setCurrentPage] = createSignal(1)
    const pageSize = 8

    const paginatedItems = () => {
        return paginate({ items: countries(), pageSize, currentPage: currentPage() })
    }

    onMount(() => {
        console.log('onMount event')
    })

    createEffect(() => {
        console.log('effect event')
        getCountries()
    })

    const getCountries = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('countries')
            .select()
            .order('id', { ascending: true })

        setCountries(data)
        setLoading(false)
    }

    const handleSearch = async (event) => {
        setSearchWord(event.target.value)
        if ((event.target.value).length === 0) {
            getCountries()
        } else {
            setLoading(true)
            const { data, error } = await supabase
                .from('countries')
                .select()
                .like('name', '%' + searchWord() + '%')

            setCountries(data)
            setLoading(false)
        }
    }

    return (
        <>
            <header>
                <Row>
                    <Col><h1>Country List</h1></Col>
                    <Col><Button href="/country-add" class="float-end mt-2" variant="dark"><i class="fa fa-plus-circle"></i> Add</Button></Col>
                </Row>
            </header>

            <section>
                <Form.Group class="mb-3">
                    <Form.Control type="search" placeholder="Enter country name to search" value={searchWord()} onInput={(event) => handleSearch(event)} />
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

                <Show when={countries().length > 0}>
                    <Row>
                        <For each={paginatedItems()}>{(country) =>
                            <Col sm={12} md={3}>
                                <CountryCard key={country.id} country={country} />
                            </Col>
                        }</For>
                        <LightPaginationNav
                            currentPage={currentPage()}
                            setCurrentPage={setCurrentPage}
                            pageSize={pageSize}
                            totalItems={countries().length}
                            limit={1}
                            showStepOptions={true}
                        />
                    </Row>
                </Show>
            </section>
        </>
    )
}

export default CountryList