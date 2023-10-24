import { createSignal } from "solid-js";

const TemplateSolid = () => {
    const [txtDemo] = createSignal('Hello World')

    return (
        <>
            <h1>Template Solid</h1>
            <span class="txt-demo">SolidJS: {txtDemo()}</span>
        </>
    )
}

export default TemplateSolid

