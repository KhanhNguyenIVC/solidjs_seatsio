// ComponentB.jsx
import { store } from "../../store/index.js";

const ComponentB = () => {
    const unreactiveLocalValue = store.count
    //Note: this will not behave reactively

    return (
        <>
            <p>ComponentB: store.count {store.count}</p>
            <p>ComponentB: unreactiveLocalValue {unreactiveLocalValue}</p>
        </>
    )
}

export default ComponentB
