import Vue from 'vue'
import Router from 'vue-router'
import Jsongen from './routes/jsongen'
import Datadic from './routes/datadic'

Vue.use(Router)

const routes = {
    mode: "history",
    routes: [
        Jsongen,
        Datadic,
        { path: '*', redirect: '/Jsongen/share' }
    ]
}

export default new Router(routes)