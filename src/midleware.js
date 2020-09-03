import router from "./router"
import axios from "axios"

// axios.defaults.baseURL = "https://xxx"

router.beforeEach((to, from, next) => {
    // console.log(to)
    next()
})