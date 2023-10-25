import "./Comparison.css";
import { Row, Col, Accordion, Table } from "solid-bootstrap";

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
                                    HTML được dùng bởi tag <span class="text-focus">&#60;template&#62;</span> và Javascript sẽ được dùng bởi tag <span class="text-focus">&#60;script&#62;</span>. <br />
                                    và có tag thứ 3 dùng cho CSS được viết trong <span class="text-focus">&#60;style&#62;</span>.
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
                            <Col sm={5} style={'padding-left: 30px'}>
                                <h6 class="txt-vue"><img src="/images/vue.svg" width={20} height={20} /> Vue</h6>
                                {/* <span>In Vue you can make use of the <cite>ref()</cite> and <cite>reactive()</cite> functions to handle state in a Vue component. <br />
                        In some cases <cite>reactive()</cite> ca\n serve as a simple state management alternative instead of having to make use of VueX.</span> */}
                                <span>Đối với Vue chúng ta có thể dùng <span class="text-focus">ref()</span> and <span class="text-focus">reactive()</span> để xử lý state trong từng component. <br />
                                    Trong một số trường hợp dùng <span class="text-focus">reactive()</span> có thể quản lý state đơn giản hơn thay vì dùng tới Vuex.</span>
                            </Col>
                            <Col sm={7}>
                                <img src="/images/vue_reactivity_1.png" style={'border-radius:6px'} />
                                {/* <p>We created out home page imported ComponentA & ComponentB</p> */}
                                <p>Tạo một trang home và import Component A và Componet B.</p>

                                <img src="/images/vue_reactivity_2.png" style={'border-radius:6px'} />
                                {/* <p>Above we created our store using the <cite>reactive()</cite> function.</p> */}
                                <p>Tiếp tục tạo mới store bằng <span class="text-focus">reactive()</span> function.</p>

                                <img src="/images/vue_reactivity_3.png" style={'border-radius:6px'} />
                                {/* <p>Above is a component which has the store imported in order to change one of the values within the store.</p> */}
                                <p>Component A đã được import store và thay đổi giá trị bằng function <cite>add</cite>.</p>

                                <img src="/images/vue_reactivity_4.png" style={'border-radius:6px'} />
                                {/* <p>This is a seperate component which will display the value of the count even as it is changing.</p> */}
                                <p>Component B sẽ phản ứng và hiển thị giá trị <cite>store.count</cite> ngay khi giá trị thay đổi.</p>
                            </Col>
                            <Col sm={5} style={'padding-left: 30px'} class="mt-5">
                                <h6 class="txt-solid mt-2"><img src="/images/solid.svg" width={20} height={20} /> Solid</h6>
                                {/* <span>In Solid we can do something similar by making use of the <cite>createStore()</cite> and the <cite>createSignal()</cite> primitives. <br />
                                Remember that <cite>createStore()</cite> only takes in objects as values. <br />
                                While <cite>createSignal()</cite> can take in booleans, objects, strings and numbers.
                                </span> */}
                                <span>
                                    Trong Solid để xử lý state chúng ta có thể dùng <span class="text-focus">createStore()</span> hoặc <span class="text-focus">createSignal()</span>. <br />
                                    <span class="text-focus">createSignal()</span> dùng cho các kiểu booleans, objects, string và numbers. <br />
                                    <span class="text-focus">createStore()</span> chỉ dùng duy nhất cho objects. <br />
                                </span>
                            </Col>
                            <Col sm={7} class="mt-5">
                                <img src="/images/solid_reactivity_1.png" style={'border-radius:6px'} />
                                {/* <p>We created out home page imported ComponentA & ComponentB</p> */}
                                <p>Tạo một trang home và import Component A và Componet B.</p>

                                <img src="/images/solid_reactivity_2.png" style={'border-radius:6px'} />
                                {/* <p>Above we created a store using <cite>createStore()<cite> in Solid. */}
                                <p>Tiếp tục tạo mới store bằng <cite>createStore()</cite> function.</p>

                                <img src="/images/solid_reactivity_3.png" style={'border-radius:6px'} />
                                {/* <p>Above is a component which has the store imported in order to change one of the values within the store.</p> */}
                                <p>Component A đã được import store và thay đổi giá trị bằng function <cite>add</cite>.</p>


                                <img src="/images/solid_reactivity_4.png" style={'border-radius:6px'} />
                                {/* <p>This is a seperate component which will display the value of the count even as it is changing.</p> */}
                                <p>Component B sẽ phản ứng và hiển thị giá trị <cite>store.count</cite> ngay khi giá trị thay đổi.</p>
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
                                {/* <h6 class="txt-vue"><img src="/images/vue.svg" width={20} height={20} /> Vue</h6>
                                <p>If you have experience with Vue I'm sure you should be familiar with the <span class="text-focus">v-if</span>, <span class="text-focus">v-else</span> and <span class="text-focus">v-else-if</span> directives. <br />
                                    This is used to conditionally render itself and anything that it is wrapping.</p> */}
                                <p>Để hiển thị nội dung với các điều kiện trong Vue, chúng ta sử dụng <span class="text-focus">v-if</span>, <span class="text-focus">v-else-if</span> and <span class="text-focus">v-else.</span></p>
                                {/* <p>In Vue you make use of the <span class="text-focus">v-for</span> directive to render a list or array of items.</p> */}
                                <p>Vue dùng <span class="text-focus">v-for</span> để render từng item trong 1 mảng.</p>
                            </Col>
                            <Col sm={9}>
                                <img src="/images/vue_conditional.png" style={'border-radius:6px'} />
                            </Col>
                            <Col sm={3} style={'padding-left: 30px'} class="mt-5">
                                <h6 class="txt-solid mt-2"><img src="/images/solid.svg" width={20} height={20} /> Solid</h6>
                                <p>Trong Solid chung ta sử dụng <span class="text-focus">&#60;Show&#62;</span> hoặc <span class="text-focus">&#60;Switch&#62;</span> để render theo điều kiện.</p>
                                <p><span class="text-focus">&#60;For&#62;</span> component là cách để thực hiện loop cho 1 mảng.</p>

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
                            {/* <span>Based on post: <a href="https://github.com/krausest/js-framework-benchmark" target="_blank">https://github.com/krausest/js-framework-benchmark</a></span> */}
                            <span>Dựa trên bài tham khảo: <a href="https://github.com/krausest/js-framework-benchmark" target="_blank">https://github.com/krausest/js-framework-benchmark</a></span>
                            {/* <span>The benchmark was run on a MacBook Pro 14 (32 GB RAM, 8/14 Cores, OSX 14.0), Chrome 118.0.5993.70 (arm64) using the puppeteer benchmark driver with reduced tracing.</span> */}
                            <span>Bài đánh giá được thực hiện trên Macbook Pro 14 (32 GB RAM, 8/14 Cores, OSX 14.0), Chrome 118.0.5993.70</span>
                            <br /><br />
                            <Col>
                                {/* <span>Duration in milliseconds ± 95% confidence interval (Slowdown = Duration / Fastest)</span> */}
                                <span>Đơn vị milliseconds (± cho mỗi lần chạy khác nhau)</span>
                                <img src="/images/banchmark_keyed.png" style={'border-radius:6px'} />
                            </Col>
                            <Col>
                                {/* <span>Startup metrics (lighthouse with mobile simulation)</span> */}
                                <span>Startup metrics</span>
                                <img src="/images/banchmark_startup.png" style={'border-radius:6px'} />
                            </Col>
                            <Col>
                                {/* <span>Memory allocation in MBs ± 95% confidence interval</span> */}
                                <span>Sử dụng Memory (MBs)</span>
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