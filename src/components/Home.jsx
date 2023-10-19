import "./Home.css";
import { createSignal, onMount, Show } from "solid-js";
import { Row, Col } from "solid-bootstrap";
import { useParams } from "@solidjs/router";

const Home = () => {
    /**
     * Params ID
     * 1: introduction
     * 2:
     * 3:
     * Default: introduction
     */
    const id = useParams().id
    const [titlePage, setTitlePage] = createSignal([])
    const CODESANDBOX_URL = 'https://codesandbox.io/p/github/KhanhNguyenIVC/solidjs_example/main?file=%2Fsrc%2FApp.jsx%3A4%2C19&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clnwjgvye0007356lrt2ibcjf%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clnwjgvye0003356la1fjckbz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clnwjgvye0005356lpnug9m0w%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clnwjgvye0006356lig053jzk%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B60%252C40%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clnwjgvye0003356la1fjckbz%2522%253A%257B%2522id%2522%253A%2522clnwjgvye0003356la1fjckbz%2522%252C%2522activeTabId%2522%253A%2522clnwjqevu0092356l4fgelr9k%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.jsx%2522%252C%2522id%2522%253A%2522clnwjqevu0092356l4fgelr9k%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clnwjgvye0006356lig053jzk%2522%253A%257B%2522id%2522%253A%2522clnwjgvye0006356lig053jzk%2522%252C%2522activeTabId%2522%253A%2522clnwjpg5h00kg356lo7cm65ru%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clnwjpg5h00kg356lo7cm65ru%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clnwjgvye0005356lpnug9m0w%2522%253A%257B%2522id%2522%253A%2522clnwjgvye0005356lpnug9m0w%2522%252C%2522activeTabId%2522%253A%2522clnwjpala00fc356lii2eir42%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clnwjpala00fc356lii2eir42%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Afalse%252C%2522sidebarPanelSize%2522%253A0%257D'

    onMount(() => {
        getTitlePage()
    })

    const getTitlePage = () => {
        switch (id) {
            case '1':
                setTitlePage('Introduction')
                break
            case '2':
                setTitlePage('Control Flow')
                break
            case '3':
                setTitlePage('Lifecycles')
                break
            default:
                setTitlePage('Introduction')
                break
        }
    }

    return (
        <>
            <h1>Basics: {titlePage}</h1>
            <p style={'color: #dc3545'}>In development progress</p>

            <div class='home-content'>
                {/* INTRODUCTION */}
                <Show
                    when={id == '1' || id == undefined}
                >
                    <Row >
                        <Col sm={4}>
                            <ul>
                                <li>Là 1 thư viện Javascript tạo nên giao diện người dùng, SolidJS trực tiếp cập nhật thay đổi UI trên native DOM (không dùng Virtual DOM như một vài Javascript UI Library/ Framework khác)</li>
                                <li>Cung cấp cơ chế Reactive chịu trách nhiệm cho việc theo dõi và tự động cập nhật thay đổi UI khi State hoặc Props thay đổi và Reactivity Primitives gồm 3 thành phần cốt lõi là Signal, Memo và Effect</li>
                                <li>SolidJS sử dụng JSX: JavaScript XML là một cú pháp mở rộng cho phép lập trình viên viết HTML trong SolidJS dễ dàng</li>
                                <li>Áp dụng mô hình Component Based tạo nên các UI có khả năng tái sử dụng</li>
                                <li>Hỗ trợ và cung cấp các Lifecycle Methods. Hỗ trợ Typescript, SSR</li>
                            </ul>
                        </Col>
                        <Col sm={8}>
                            {/* <iframe
                                src={CODESANDBOX_URL}
                                style="width:100%;height:150%;border:0;border-radius:4px;overflow:hidden"
                                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe> */}
                        </Col>
                    </Row>
                </Show>

            </div>
        </>
    )
}

export default Home