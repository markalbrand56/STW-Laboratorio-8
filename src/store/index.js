import { routerNavigate } from "@storeon/router"
import { createStoreon } from "storeon"
import { storeonDevtools } from "storeon/devtools"
import config from "./config"
import router from "./router"

const store = createStoreon([config, router, storeonDevtools])

const navigate = (target) => {
    console.log("Navigating to", target)
    store.dispatch(routerNavigate, target)
}

export { navigate }
export default store
