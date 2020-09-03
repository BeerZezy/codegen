module.exports = {
    path: '/Jsongen',
    name: 'Jsongen',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'share',
            name: 'JsongenHome',
            component: () => import('@/views/Jsongen/Home.vue')
        }
    ]
}