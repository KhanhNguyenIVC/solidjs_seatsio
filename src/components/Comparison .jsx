import "./Comparison.css";
import { Row, Col, Accordion } from "solid-bootstrap";

const Comparison = () => {
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
                                {/* <span>The template syntax used with the composition API in Vue.<br />
                        HTML is used in the <cite>&#60;template&#62;</cite><cite>&#60;/template&#62;</cite> tag and Javascript or Typescript is used in the <cite>&#60;script&#62;</cite><cite>&#60;/script&#62;</cite> tag. <br />
                        There is a third tag used for styling called the <cite>&#60;style&#62;</cite><cite>&#60;/style&#62;</cite> tag as well.</span> */}
                                <span>Viết theo syntax Vue composition API.<br />
                                    HTML được dùng bởi tag <cite>&#60;template&#62;</cite><cite>&#60;/template&#62;</cite> và Javascript sẽ được dùng bởi tag <cite>&#60;script&#62;</cite><cite>&#60;/script&#62;</cite>. <br />
                                    và có tag thứ 3 dùng cho CSS được viết trong <cite>&#60;style&#62;</cite><cite>&#60;/style&#62;</cite>.
                                </span>
                            </Col>
                            <Col sm={6}>
                                <img src="/images/vue_template.png" style={'border-radius:6px'} />
                            </Col>
                            <Col sm={6} style={'padding-left: 30px'} class="mt-3">
                                <h6 class="txt-solid mt-2"><img src="/images/solid.svg" width={20} height={20} /> Solid</h6>
                                {/* <span>Solid on the other hand makes use of only one kind of component, the function component. <br />
                        Unlike Vue, Solid doesn't have different syntaxes, it only has one. <br />
                        All components and pages in Solid are represented by function components.</span> */}
                                <span>
                                    Khác với Vue, Solid chỉ sử dụng 1 function component.<br />
                                    Trong 1 page có thể có nhiều component lồng vào nhau nhưng chỉ có duy nhất 1 component top level.
                                </span>
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
                            <Col sm={6} style={'padding-left: 30px'}>
                                <h6 class="txt-vue"><img src="/images/vue.svg" width={20} height={20} /> Vue</h6>
                                {/* <span>In Vue you can make use of the <cite>ref()</cite> and <cite>reactive()</cite> functions to handle state in a Vue component. <br />
                        In some cases <cite>reactive()</cite> ca\n serve as a simple state management alternative instead of having to make use of VueX.</span> */}
                                <span>Đối với Vue chúng ta có thể dùng <cite>ref()</cite> and <cite>reactive()</cite> để xử lý state trong từng component. <br />
                                    Trong một số trường hợp dùng <cite>reactive()</cite> có thể quản lý state đơn giản hơn thay vì dùng tới Vuex.</span>
                            </Col>
                            <Col sm={6}>
                                <img src="/images/vue_reactivity_1.png" style={'border-radius:6px'} />
                                {/* <p>We created out home page imported ComponentA & ComponentB</p> */}
                                <p>Tạo một trang home và import Component A và Componet B.</p>

                                <img src="/images/vue_reactivity_2.png" style={'border-radius:6px'} />
                                {/* <p>Above we created our store using the <cite>reactive()</cite> function.</p> */}
                                <p>Tiếp tục tạo mới store bằng <cite>reactive()</cite> function.</p>

                                <img src="/images/vue_reactivity_3.png" style={'border-radius:6px'} />
                                {/* <p>Above is a component which has the store imported in order to change one of the values within the store.</p> */}
                                <p>Component A đã được import store và thay đổi giá trị bằng function <cite>add</cite>.</p>

                                <img src="/images/vue_reactivity_4.png" style={'border-radius:6px'} />
                                {/* <p>This is a seperate component which will display the value of the count even as it is changing.</p> */}
                                <p>Component B sẽ phản ứng và hiển thị giá trị <cite>store.count</cite> ngay khi giá trị thay đổi.</p>
                            </Col>
                            <Col sm={6} style={'padding-left: 30px'} class="mt-3">
                                <h6 class="txt-solid mt-2"><img src="/images/solid.svg" width={20} height={20} /> Solid</h6>
                                {/* <span>In Solid we can do something similar by making use of the <cite>createStore()</cite> and the <cite>createSignal()</cite> primitives. <br />
                                Remember that <cite>createStore()</cite> only takes in objects as values. <br />
                                While <cite>createSignal()</cite> can take in booleans, objects, strings and numbers.
                                </span> */}
                                <span>
                                    Trong Solid để xử lý state chúng ta có thể dùng <cite>createStore()</cite> hoặc <cite>createSignal()</cite>. <br />
                                    <cite>createSignal()</cite> dùng cho các kiểu booleans, objects, string và numbers. <br />
                                    <cite>createStore()</cite> chỉ dùng duy nhất cho objects. <br />
                                    👨‍💻In development progress....
                                </span>
                            </Col>
                            <Col sm={6} class="mt-3">
                                {/* <img src="/images/solid_template.png" style={'border-radius:6px'} /> */}
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>#3 Conditional Rendering</h5></Accordion.Header>
                    <Accordion.Body>
                        👨‍💻In development progress....
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Comparison 