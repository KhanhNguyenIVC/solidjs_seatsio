import "./Home.css";
import { createSignal, onMount, Show, onCleanup } from "solid-js";
import { Row, Col } from "solid-bootstrap";
import { useParams } from "@solidjs/router";
import solidLogo from '../logo.svg'
import { useI18n } from '@amoutonbrady/solid-i18n';
import { basicsParam, setBasicsParam } from "../../store/basic_param";

const Home = () => {
    /**
     * Params ID
     * 1: Reactivity
     * 2: Control Flow
     * 3: Lifecycles
     * Default: Essentials
     */
    const idParam = parseInt(useParams().id)
    const [titlePage, setTitlePage] = createSignal([])
    const [isIframeLoaded, setIsIframeLoaded] = createSignal(false)
    const [t] = useI18n();

    onMount(() => {
        if (idParam !== 0) {
            setBasicsParam({ ...basicsParam, id: idParam })
        }
        document.getElementById('myframe').onload = function () {
            setIsIframeLoaded(true)
        };
    })

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
    /**
     * Get left content based on id param
     */
    const ContentLeft = () => {
        switch (basicsParam.id) {
            case 1:
                setTitlePage('Reactivity')
                return <ul>
                    <li>{parseHtml('reactivity_1')}</li>
                    <li>{parseHtml('reactivity_2')}</li>
                    <li>{parseHtml('reactivity_3')}</li>
                    <li>{parseHtml('reactivity_4')}</li>
                    <li>{parseHtml('reactivity_5')}</li>
                </ul>
            case 2:
                setTitlePage('Control Flow')
                return <ul>
                    <li>{parseHtml('control_flow_1')}</li>
                    <li>{parseHtml('control_flow_2')}</li>
                    <li>{parseHtml('control_flow_3')}</li>
                </ul>
            case 3:
                setTitlePage('Lifecycles')
                return <ul>
                    <li>{parseHtml('life_cycles_1')}</li>
                    <li>{parseHtml('life_cycles_2')}</li>
                </ul>
            default:
                setTitlePage('SolidJS Essentials')
                return <ul>
                    <li>{t('essentials_1')}</li>
                    <li>{t('essentials_2')}</li>
                    <li>{t('essentials_3')}</li>
                    <li>{t('essentials_4')}</li>
                    <li>{t('essentials_5')}</li>
                </ul>
        }
    }

    return (
        <>
            <h1>{titlePage}</h1>
            <div class='home-content'>
                <Row>
                    <Col sm={4} class="card-content-basics rounded-start">
                        {ContentLeft()}
                    </Col>
                    <Col class="ps-0">
                        <Show when={basicsParam.id} fallback={<img src={solidLogo} class="solid-logo" alt="Solid logo" />}>
                            <Show
                                when={!isIframeLoaded()}
                            >
                                <div class="text-center">
                                    <img src='/images/loading_cat.gif' width={400} height={400} />
                                    <h5 style={'color:#242424'}>Loading source code...</h5></div>
                            </Show>
                        </Show>
                        <iframe
                            src="https://codesandbox.io/p/github/KhanhNguyenIVC/solidjs_example/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clo6y9z5h00f1356losqnh4yf%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clo6y9z5h00ey356ln3qxo1pw%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clo6y9z5h00f0356lzfkvmqci%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clo6y9z5h00ez356lisilb8pp%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clo6y9z5h00ey356ln3qxo1pw%2522%253A%257B%2522id%2522%253A%2522clo6y9z5h00ey356ln3qxo1pw%2522%252C%2522activeTabId%2522%253A%2522clo6yh9l50051356l0sxngem4%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Findex.html%2522%252C%2522id%2522%253A%2522clo6yh9l50051356l0sxngem4%2522%252C%2522mode%2522%253A%2522temporary%2522%257D%255D%257D%252C%2522clo6y9z5h00ez356lisilb8pp%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo3p12xt0007356jkc6j7do3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clo6y9z5h00ez356lisilb8pp%2522%252C%2522activeTabId%2522%253A%2522clo3p12xt0007356jkc6j7do3%2522%257D%252C%2522clo6y9z5h00f0356lzfkvmqci%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clo3p12xt0005356j4mkc7zvk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522id%2522%253A%2522clo6y9z5h00f0356lzfkvmqci%2522%252C%2522activeTabId%2522%253A%2522clo3p12xt0005356j4mkc7zvk%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A24.16666666666667%257D"
                            id="myframe"
                            style={!isNaN(basicsParam.id) && isIframeLoaded() ? '' : 'display:none'}
                            class="ifra-card rounded-end"
                            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default Home