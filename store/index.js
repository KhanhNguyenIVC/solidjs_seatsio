// store/index.js
import { createStore } from "solid-js/store";

export const [store, setStore] = createStore({ count: 0 })
