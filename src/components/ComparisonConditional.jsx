import { createSignal } from "solid-js";

const ComparisonConditional = () => {
    const [jsFrameWorks] = createSignal([
        { id: 1, name: 'Vanilla JS' },
        { id: 2, name: 'Solid JS' },
        { id: 3, name: 'Vue JS' },
        { id: 4, name: 'React JS' }
    ])
    const [fwSelected, setFwSelected] = createSignal(0)

    return (
        <>
            <h1>Conditional & Listing Rendering Solid</h1>
            <For each={jsFrameWorks()}>{(jsFrameWork, i) =>
                <ul>
                    <li class="li-conditional" onclick={() => setFwSelected(jsFrameWork.id)} >{jsFrameWork.name}</li>
                </ul>
            }</For>
            <Switch fallback={<span>You not picked yet any one.</span>} >
                <Match when={fwSelected() === 1}>You picked Vanilla</Match>
                <Match when={fwSelected() === 2}>You picked Solid</Match>
                <Match when={fwSelected() === 3}>You picked Vue</Match>
                <Match when={fwSelected() === 4}>You picked React</Match>
            </Switch>
        </>
    )
}

export default ComparisonConditional

