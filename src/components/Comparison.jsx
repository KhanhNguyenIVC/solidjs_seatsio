import "./Comparison.css";
import { Row, Col, Accordion, Table } from "solid-bootstrap";
import { useI18n } from '@amoutonbrady/solid-i18n';

const Comparison = () => {
    const [t] = useI18n();

    /**
       * Parse string from i18n to html
       * @param {string} dictID
       * 
       * @returns html
       */
    const parseHtml = (dictID) => {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = '<div>' + t(dictID) + '</div>';
        var div = wrapper.firstChild;
        return div;
    }

    return (
        <>
            <h1>Comparison with Vue</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header class="accordion-header"><h5>#1 Template Components vs Function Components</h5></Accordion.Header>
                    <Accordion.Body class="accordion-body">
                        <Row>
                            <Col sm={6} style={'padding-left: 30px'}>
                                <h6 class="txt-vue"><img src="/images/vue.svg" width={20} height={20} /> Vue</h6>
                                {parseHtml('comparison_vue_template')}
                            </Col>
                            <Col sm={6}>
                                <img src="/images/vue_template.png" style={'border-radius:6px'} />
                            </Col>
                            <Col sm={6} style={'padding-left: 30px'} class="mt-3">
                                <h6 class="txt-solid mt-2"><img src="/images/solid.svg" width={20} height={20} /> Solid</h6>
                                {parseHtml('comparison_solid_template')}
                            </Col>
                            <Col sm={6} class="mt-3">
                                <img src="/images/solid_template.png" style={'border-radius:6px'} />
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>#2 Reactivity and Statefulness</h5></Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col sm={5} style={'padding-left: 30px'}>
                                <h6 class="txt-vue"><img src="/images/vue.svg" width={20} height={20} /> Vue</h6>
                                {parseHtml('comparison_vue_reactivity_1')}
                            </Col>
                            <Col sm={7}>
                                <img src="/images/vue_reactivity_1.png" style={'border-radius:6px'} />
                                {parseHtml('comparison_vue_reactivity_2')}
                                <img src="/images/vue_reactivity_2.png" style={'border-radius:6px'} />
                                {parseHtml('comparison_vue_reactivity_3')}
                                <img src="/images/vue_reactivity_3.png" style={'border-radius:6px'} />
                                {parseHtml('comparison_vue_reactivity_4')}
                                <img src="/images/vue_reactivity_4.png" style={'border-radius:6px'} />
                                {parseHtml('comparison_vue_reactivity_5')}
                            </Col>
                            <Col sm={5} style={'padding-left: 30px'} class="mt-5">
                                <h6 class="txt-solid mt-2"><img src="/images/solid.svg" width={20} height={20} /> Solid</h6>
                                {parseHtml('comparison_solid_reactivity_1')}
                            </Col>
                            <Col sm={7} class="mt-5">
                                <img src="/images/solid_reactivity_1.png" style={'border-radius:6px'} />
                                {parseHtml('comparison_solid_reactivity_2')}
                                <img src="/images/solid_reactivity_2.png" style={'border-radius:6px'} />
                                {parseHtml('comparison_solid_reactivity_3')}
                                <img src="/images/solid_reactivity_3.png" style={'border-radius:6px'} />
                                {parseHtml('comparison_solid_reactivity_4')}
                                <img src="/images/solid_reactivity_4.png" style={'border-radius:6px'} />
                                {parseHtml('comparison_solid_reactivity_5')}
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>#3 Conditional and Listing Rendering</h5></Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col sm={3} style={'padding-left: 30px'}>
                                <h6 class="txt-vue"><img src="/images/vue.svg" width={20} height={20} /> Vue</h6>
                                {parseHtml('comparison_vue_conditional')}
                            </Col>
                            <Col sm={9}>
                                <img src="/images/vue_conditional.png" style={'border-radius:6px'} />
                            </Col>
                            <Col sm={3} style={'padding-left: 30px'} class="mt-5">
                                <h6 class="txt-solid mt-2"><img src="/images/solid.svg" width={20} height={20} /> Solid</h6>
                                {parseHtml('comparison_solid_conditional')}
                            </Col>
                            <Col sm={9} class="mt-5">
                                <img src="/images/solid_conditional.png" style={'border-radius:6px'} />
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h5>#4 Hooks event</h5></Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th><img src="/images/vue.svg" width={20} height={20} /> Vue</th>
                                        <th><img src="/images/solid.svg" width={20} height={20} /> Solid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onMounted()</td>
                                        <td>onMount()</td>
                                    </tr>
                                    <tr>
                                        <td>onUnmounted()</td>
                                        <td>onCleanup()</td>
                                    </tr>
                                    <tr>
                                        <td>ref()</td>
                                        <td>createSignal()</td>
                                    </tr>
                                    <tr>
                                        <td>reactive()</td>
                                        <td>createStore()</td>
                                    </tr>
                                    <tr>
                                        <td>computed()</td>
                                        <td>createMemo()</td>
                                    </tr>
                                    <tr>
                                        <td>watchEffect()</td>
                                        <td>createEffect()</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h5>#5 Benchmark</h5></Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            {parseHtml('comparison_benmark_1')}
                            
                            <Col>
                                {parseHtml('comparison_benmark_2')}
                                <img src="/images/banchmark_keyed.png" style={'border-radius:6px'} />
                            </Col>
                            <Col>
                                {parseHtml('comparison_benmark_3')}
                                <img src="/images/banchmark_startup.png" style={'border-radius:6px'} />
                            </Col>
                            <Col>
                                {parseHtml('comparison_benmark_4')}
                                <img src="/images/banchmark_memory.png" style={'border-radius:6px'} />
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion><br />
        </>
    )
}

export default Comparison 