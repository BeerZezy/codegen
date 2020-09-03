import Vue from 'vue'
import Router from 'vue-router'
import Jsongen from './routes/jsongen'

Vue.use(Router)

const routes = {
    mode: "history",
    routes: [
        Jsongen,
        { path: '*', redirect: '/Jsongen/share' }
    ]
}

export default new Router(routes)