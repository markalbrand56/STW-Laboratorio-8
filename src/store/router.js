import { createRouter } from "@storeon/router"

export default createRouter([
    ["/", () => ({ page: "home" })],
    ["/config", () => ({ page: "configuration" })],
    ["/game", () => ({ page: "game" })],
    ["/result", () => ({ page: "result" })],
])
