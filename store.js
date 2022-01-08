import { createStorage } from "./core.js";
import reducer from "./reducer.js";
import withLogger from "./logger.js";

const { attach, connect, dispatch } = createStorage(withLogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}