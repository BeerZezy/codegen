module.exports = {
    path: '/Datadic',
    name: 'Datadic',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'DatadicHome',
            component: () => import('@/views/Datadic/Home.vue')
        }
    ]
}