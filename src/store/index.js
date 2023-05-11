// import { storeonDevtools } from "storeon/devtools"
import { routerNavigate } from "@storeon/router"
import { createStoreon } from "storeon"
import router from "./router"

const store = createStoreon([router])

const navigate = (target) => {
    console.log("Navigating to", target)
    store.dispatch(routerNavigate, target)
}

export { navigate }
export default store
