// ComponentA.jsx
import { store, setStore } from "../../store/index.js";
import {Button } from "solid-bootstrap";

const ComponentA = () => {
    const add = () => {
        setStore({...store,count:store.count+1})
    }

    return (
        <>
            <Button  class="mt-3" onClick={[add]} variant="dark">Add one</Button>
        </>
    )
}

export default ComponentA
