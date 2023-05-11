import React from "react"
import { useStoreon } from "storeon/react"
import { routerKey } from "@storeon/router"
import Home from "./Home/Home"
import Configuration from "./Configuration/Configuration"
import Game from "./Game/Game"

function Page() {
    const { [routerKey]: route } = useStoreon(routerKey)

    let Component = null
    switch (route.match.page) {
        case "home":
            Component = <Home />
            break
        case "configuration":
            Component = <Configuration />
            break
        case "game":
            Component = <Game />
            break
        default:
            Component = <h1>404</h1>
    }

    return <main>{Component}</main>
}

export default Page
