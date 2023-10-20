import "./Home.css";
import { createSignal, onMount, Show } from "solid-js";
import { Row, Col } from "solid-bootstrap";
import { useParams } from "@solidjs/router";
import solidLogo from '../logo.svg'

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
    const [isIframeLoaded, setIsIframeLoaded] = createSignal(false)

    onMount(() => {
        getTitlePage()

        window.onload = function () {
            setIsIframeLoaded(true)
        }
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
                setTitlePage('SolidJS Essentials')
                break
        }
    }

    return (
        <>
            <h1>Basics: {titlePage}</h1>
            <p style={'color: #dc3545'}>👨‍💻In development progress....</p>

            <div class='home-content'>
                {/* Essentials */}
                <Show
                    when={id == undefined}
                >
                    <Row>
                        <Col sm={4} class="card-content-basics">
                            <ul>
                                <li>Là 1 thư viện Javascript tạo nên giao diện người dùng, SolidJS trực tiếp cập nhật thay đổi UI trên native DOM (không dùng Virtual DOM như một vài Javascript UI Library/ Framework khác)</li>
                                <li>Cung cấp cơ chế Reactive chịu trách nhiệm cho việc theo dõi và tự động cập nhật thay đổi UI khi State hoặc Props thay đổi và Reactivity Primitives gồm 3 thành phần cốt lõi là Signal, Memo và Effect</li>
                                <li>SolidJS sử dụng JSX: JavaScript XML là một cú pháp mở rộng cho phép lập trình viên viết HTML trong SolidJS dễ dàng</li>
                                <li>Áp dụng mô hình Component Based tạo nên các UI có khả năng tái sử dụng</li>
                                <li>Hỗ trợ và cung cấp các Lifecycle Methods. Hỗ trợ Typescript, SSR</li>
                            </ul>
                        </Col>
                        <Col class="ps-0">
                            <img src={solidLogo} class="solid-logo" alt="Solid logo" />
                        </Col>
                    </Row>
                </Show>

                {/* Introduction */}
                <Show
                    when={id === '1'}
                >
                    <Row>
                        <Col sm={4} class="card-content-basics">
                            <ul>
                                {/* <li>Just like React, Solid uses JSX to render HTML in the browser. It also uses similar syntax for reactivity to update DOM in real-time. <br />
                                However, unlike React, it uses a compiled DOM instead of virtual DOM.Solid components allow only a single JSX element at the top level. <br />
                                To combat this, you can use special JSX elements called fragments.
                                </li> */}
                                <li>Cũng giống như React, Solid sử dụng JSX để render HTML lên trình duyệt web, cập nhật DOM in real-time. <br />
                                    Solidjs sử dụng compiled DOM thay vì virtual DOM như React. <br />
                                    Solidjs bắt buộc sử dụng single JSX element (Fragment element)
                                </li>

                                {/* <li>Components  can be nested inside one another. For instance. <br />
                                Here you have a &#60;HelloWorldComponent&#62;.</li> */}
                                <li>Components là những funcions được sử dụng để lồng vào các component <br />
                                    Ví dụ &#60;HelloWorldComponent&#62;.</li>

                                {/* <li>Signals are the cornerstone of reactivity in Solid. They contain values that change over time. <br />
                                When you change a signal's value, it automatically updates anything that uses it.</li> */}
                                <li>Sinals dùng để ghi danh các simple reactive state.
                                    Nếu giá trị signal thay đổi nó sẽ tự động cập nhật lại tất cả các chỗ đang sử dụng chúng.</li>

                                {/* <li>Signals are trackable values, but they are only one half of the equation. To complement those are observers that can be updated by those trackable values. <br />
                                An effect is one such observer; it runs a side effect that depends on signals.</li> */}
                                <li>Effects: dùng để theo dõi mỗi khi Sinals thay đổi giá trị.</li>

                                {/* <li>Memos like an effect and read-only signal <br />
                                Since they are aware of both their dependencies and their observers, they can ensure that they run only once for any change. <br />
                                This makes them preferable to registering effects that write to signals. Generally, what can be derived, should be derived.
                                </li> */}
                                <li>Memos là kết hợp của Efect và Signal (getter) <br />
                                    Khi xử lý việc lặp lại, sử dụng Memos để lấy ra giá trị mà không cần truy xuất lại chúng khi giá trị phụ thuộc thay đổi.
                                </li>
                            </ul>
                        </Col>
                        <Col class="ps-0">
                            <Show
                                when={!isIframeLoaded()}
                            >
                                <div class="text-center" style={'margin-top: 30vh'}><div class='loading-codesandbox'></div><h5 style={'color:#242424'}>Loading source code...</h5></div>
                            </Show>
                            <iframe
                                src="https://codesandbox.io/p/github/KhanhNguyenIVC/solidjs_example/main?file=%2Fsrc%2Fpages%2FIntroduction.jsx%3A1%2C1&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clnwjgvye0007356lrt2ibcjf%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clnwjgvye0003356la1fjckbz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clnwjgvye0005356lpnug9m0w%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clnwjgvye0006356lig053jzk%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B60%252C40%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clnwjgvye0003356la1fjckbz%2522%253A%257B%2522id%2522%253A%2522clnwjgvye0003356la1fjckbz%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fpages%252FIntroduction.jsx%2522%252C%2522id%2522%253A%2522clnx113j4006y356lqf1b5cij%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clnx113j4006y356lqf1b5cij%2522%257D%252C%2522clnwjgvye0006356lig053jzk%2522%253A%257B%2522id%2522%253A%2522clnwjgvye0006356lig053jzk%2522%252C%2522activeTabId%2522%253A%2522clnwjpg5h00kg356lo7cm65ru%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clnwjpg5h00kg356lo7cm65ru%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252Fintroduction%2522%257D%255D%257D%252C%2522clnwjgvye0005356lpnug9m0w%2522%253A%257B%2522id%2522%253A%2522clnwjgvye0005356lpnug9m0w%2522%252C%2522activeTabId%2522%253A%2522clnwjpala00fc356lii2eir42%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clnwjpala00fc356lii2eir42%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Afalse%252C%2522sidebarPanelSize%2522%253A0%257D"
                                style="width:100%;height:100%;border:0;overflow:hidden;"
                                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
                        </Col>
                    </Row>
                </Show>
            </div>
        </>
    )
}

export default Home