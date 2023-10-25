import "./Home.css";
import { createSignal, onMount, Show } from "solid-js";
import { Row, Col } from "solid-bootstrap";
import { useParams } from "@solidjs/router";
import solidLogo from '../logo.svg'
import { useI18n } from '@amoutonbrady/solid-i18n';

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
    const [t, { locale }] = useI18n();

    onMount(() => {
        getTitlePage()

        window.onload = function () {
            setIsIframeLoaded(true)
        }
    })

    const getTitlePage = () => {
        switch (id) {
            case '1':
                setTitlePage('Basic Reactivity')
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
            <h1>{titlePage}</h1>
            {/* <p style={'color: #dc3545'}>👨‍💻In development progress....</p> */}
            <div class='home-content'>
                {/* Essentials */}
                <Show
                    when={id == undefined}
                >
                    <Row>
                        <Col sm={4} class="card-content-basics rounded-start">
                            <h1>{t('hello', { name: 'n18' })}</h1>
                            <span>{locale()}</span>
                            <button onclick={() => {locale('vn')}}>VN</button>
                            <button onclick={() => {locale('en')}}>EN</button>
                            <ul>
                                <li>Là 1 thư viện Javascript tạo nên giao diện người dùng, SolidJS trực tiếp cập nhật thay đổi UI trên native DOM (không dùng Virtual DOM như một vài Javascript UI Library/ Framework khác)</li>
                                <li>Cung cấp cơ chế Reactive chịu trách nhiệm cho việc theo dõi và tự động cập nhật thay đổi UI khi State hoặc Props thay đổi và Reactivity Primitives gồm 3 thành phần cốt lõi là Signal, Memo và Effect.</li>
                                <li>SolidJS sử dụng JSX: JavaScript XML là một cú pháp mở rộng cho phép lập trình viên viết HTML trong SolidJS dễ dàng.</li>
                                <li>Áp dụng mô hình Component Based tạo nên các UI có khả năng tái sử dụng.</li>
                                <li>Hỗ trợ và cung cấp các Lifecycle Methods. Hỗ trợ Typescript, SSR.</li>
                            </ul>
                        </Col>
                        <Col class="ps-0">
                            {/* <img src={solidLogo} class="solid-logo" alt="Solid logo" /> */}
                        </Col>
                    </Row>
                </Show>

                {/* Introduction */}
                <Show
                    when={id === '1'}
                >
                    <Row>
                        <Col sm={4} class="card-content-basics rounded-start">
                            <ul>
                                {/* <li>Just like React, Solid uses JSX to render HTML in the browser. It also uses similar syntax for reactivity to update DOM in real-time. <br />
                                However, unlike React, it uses a compiled DOM instead of virtual DOM.Solid components allow only a single JSX element at the top level. <br />
                                To combat this, you can use special JSX elements called fragments.
                                </li> */}
                                <li>Cũng giống như React, Solid sử dụng JSX để render HTML lên trình duyệt web, cập nhật DOM in real-time.<br />
                                    Solidjs sử dụng compiled DOM thay vì virtual DOM như React.<br />
                                    Solidjs bắt buộc sử dụng <span class="text-focus">single JSX element</span> (Fragment element)
                                </li>

                                {/* <li>Components  can be nested inside one another. For instance. <br />
                                Here you have a &#60;HelloWorldComponent&#62;.</li> */}
                                <li><span class="text-focus">Components</span> là những funcions được sử dụng để lồng vào các component.<br />
                                    Ví dụ &#60;HelloWorldComponent&#62;.</li>

                                {/* <li>Signals are the cornerstone of reactivity in Solid. They contain values that change over time. <br />
                                When you change a signal's value, it automatically updates anything that uses it.</li> */}
                                <li><span class="text-focus">Signals</span> dùng để ghi danh các simple reactive state.<br />
                                    Nếu giá trị signal thay đổi nó sẽ tự động cập nhật lại tất cả các chỗ đang sử dụng chúng.</li>

                                {/* <li>Signals are trackable values, but they are only one half of the equation. To complement those are observers that can be updated by those trackable values. <br />
                                An effect is one such observer; it runs a side effect that depends on signals.</li> */}
                                <li><span class="text-focus">Effects</span> để theo dõi mỗi khi Signals thay đổi giá trị.</li>

                                {/* <li>Memos like an effect and read-only signal <br />
                                Since they are aware of both their dependencies and their observers, they can ensure that they run only once for any change. <br />
                                This makes them preferable to registering effects that write to signals. Generally, what can be derived, should be derived.
                                </li> */}
                                <li><span class="text-focus">Memos</span> là kết hợp của Efect và Signal (getter)<br />
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
                                src="https://codesandbox.io/p/github/KhanhNguyenIVC/solidjs_example/main?file=%2Fsrc%2Fpages%2FIntroduction.jsx%3A9%2C50&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clo3plinr003o356l89sef3oi%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clo3plinr003l356lm3nwfkby%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clo3plinr003n356ln4i6oky5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clo3plinr003m356lt8zo4t5x%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clo3plinr003l356lm3nwfkby%2522%253A%257B%2522id%2522%253A%2522clo3plinr003l356lm3nwfkby%2522%252C%2522activeTabId%2522%253A%2522clo3pnb3z003j356lj9tx9xfi%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fpages%252FIntroduction.jsx%2522%252C%2522id%2522%253A%2522clo3pnb3z003j356lj9tx9xfi%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clo3plinr003m356lt8zo4t5x%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo3p12xt0007356jkc6j7do3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252Fintroduction%2522%257D%255D%252C%2522id%2522%253A%2522clo3plinr003m356lt8zo4t5x%2522%252C%2522activeTabId%2522%253A%2522clo3p12xt0007356jkc6j7do3%2522%257D%252C%2522clo3plinr003n356ln4i6oky5%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo3p12xt0005356j4mkc7zvk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522id%2522%253A%2522clo3plinr003n356ln4i6oky5%2522%252C%2522activeTabId%2522%253A%2522clo3p12xt0005356j4mkc7zvk%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Afalse%252C%2522sidebarPanelSize%2522%253A0%257D"
                                class="ifra-card rounded-end"
                                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
                        </Col>
                    </Row>
                </Show>

                {/* Control Flow */}
                <Show
                    when={id === '2'}
                >
                    <Row>
                        <Col sm={4} class="card-content-basics rounded-start">
                            <ul>
                                {/* <li>The most basic control flow is the conditional. Solid's compiler is smart enough to optimally handle ternaries (a ? b : c) and boolean expressions (a && b).<br />
                                However, often it is more readable to use Solid's &#60;Show&#62; component.
                                </li> */}
                                <li><span class="text-focus">&#60;Show&#62</span> sử dụng component này khi muốn set điều kiện để hiển thị.<br />
                                    Sử dụng thuộc tính <cite>fallback</cite> để set điều kiện ngược lại.
                                </li>

                                {/* <li>The <span class="text-focus">&#60;For&#62</span> component is the best way to loop over an array of objects.<br />
                                As the array changes, <span class="text-focus">&#60;For&#62</span> updates or moves items in the DOM rather than recreating them. Let's look at an example.
                                </li> */}
                                <li><span class="text-focus">&#60;For&#62</span> là component dùng để loop một mảng. <br />
                                    Khi mảng thay đổi DOM sẽ tự động được update lại.</li>

                                {/* <li>Sometimes you need to deal with conditionals with more than 2 mutual exclusive outcomes. For this case, we have the <span class="text-focus">&#60;Switch&#62</span> and <span class="text-focus">&#60;Match&#62</span> components modeled roughly after JavaScript's switch/case.<br />
                                It will try in order to match each condition, stopping to render the first that evaluates to true. Failing all of them, it will render the fallback.
                                </li> */}
                                <li><span class="text-focus">&#60;Switch&#62</span> và <span class="text-focus">&#60;Match&#62</span> khi có nhiều điều kiện để hiển thị.<br />
                                    Sử dụng thuộc tính <cite>fallback</cite> để set điều kiện default.
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
                                src="https://codesandbox.io/p/github/KhanhNguyenIVC/solidjs_example/main?file=%2Fsrc%2Fpages%2FControlFlow.jsx%3A1%2C1&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clo3plinr003o356l89sef3oi%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clo3plinr003l356lm3nwfkby%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clo3plinr003n356ln4i6oky5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clo3plinr003m356lt8zo4t5x%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clo3plinr003l356lm3nwfkby%2522%253A%257B%2522id%2522%253A%2522clo3plinr003l356lm3nwfkby%2522%252C%2522activeTabId%2522%253A%2522clo3q2oax007u356lq2mrxt4b%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fpages%252FControlFlow.jsx%2522%252C%2522id%2522%253A%2522clo3q2oax007u356lq2mrxt4b%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clo3plinr003m356lt8zo4t5x%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo3p12xt0007356jkc6j7do3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252Fcontrol-flow%2522%257D%255D%252C%2522id%2522%253A%2522clo3plinr003m356lt8zo4t5x%2522%252C%2522activeTabId%2522%253A%2522clo3p12xt0007356jkc6j7do3%2522%257D%252C%2522clo3plinr003n356ln4i6oky5%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo3p12xt0005356j4mkc7zvk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522id%2522%253A%2522clo3plinr003n356ln4i6oky5%2522%252C%2522activeTabId%2522%253A%2522clo3p12xt0005356j4mkc7zvk%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Afalse%252C%2522sidebarPanelSize%2522%253A0%257D"
                                class="ifra-card rounded-end"
                                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
                        </Col>
                    </Row>
                </Show>

                {/* Lifecycles */}
                <Show
                    when={id === '3'}
                >
                    <Row>
                        <Col sm={4} class="card-content-basics rounded-start">
                            <ul>
                                {/* <li><span class="text-focus">onMount</span>: Registers a method that runs after initial render and elements have been mounted.<br />
                                    Ideal for using refs and managing other one time side effects.<br />
                                    It is equivalent to a createEffect which does not have any dependencies.
                                </li> */}
                                <li>
                                    <span class="text-focus">onMount</span> trước khi render trang, khi cần thực thi các initial methods.
                                </li>
                                {/* <li><span class="text-focus">onCleanup</span>: Registers a method that runs after initial render and elements have been mounted.<br />
                                Ideal for using refs and managing other one time side effects.<br />
                                It is equivalent to a createEffect which does not have any dependencies.
                                </li> */}
                                <li>
                                    <span class="text-focus">onCleanup</span> Sự kiện này được gọi khi qua trang khác hoặc đóng trang hiện tại.
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
                                src="https://codesandbox.io/p/github/KhanhNguyenIVC/solidjs_example/main?file=%2Fsrc%2Fpages%2FLifecycles.jsx%3A1%2C1&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clo3plinr003o356l89sef3oi%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clo3plinr003l356lm3nwfkby%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clo3plinr003n356ln4i6oky5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clo3plinr003m356lt8zo4t5x%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clo3plinr003l356lm3nwfkby%2522%253A%257B%2522id%2522%253A%2522clo3plinr003l356lm3nwfkby%2522%252C%2522activeTabId%2522%253A%2522clo3q6gmg009c356ls1c3z9is%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fpages%252FLifecycles.jsx%2522%252C%2522id%2522%253A%2522clo3q6gmg009c356ls1c3z9is%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clo3plinr003m356lt8zo4t5x%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo3p12xt0007356jkc6j7do3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252Flifecycles%2522%257D%255D%252C%2522id%2522%253A%2522clo3plinr003m356lt8zo4t5x%2522%252C%2522activeTabId%2522%253A%2522clo3p12xt0007356jkc6j7do3%2522%257D%252C%2522clo3plinr003n356ln4i6oky5%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo3p12xt0005356j4mkc7zvk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522id%2522%253A%2522clo3plinr003n356ln4i6oky5%2522%252C%2522activeTabId%2522%253A%2522clo3p12xt0005356j4mkc7zvk%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Afalse%252C%2522sidebarPanelSize%2522%253A0%257D"
                                class="ifra-card rounded-end"
                                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
                        </Col>
                    </Row>
                </Show>
            </div >
        </>
    )
}

export default Home