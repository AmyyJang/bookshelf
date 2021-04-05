export default {
    path:'/list',
    component : () => import('views/List'),
    
    children : [
        
        {
            path: 'read',
            component: () => import('views/List/Read') 
        },
        {
            path: 'forread',
            component: () => import('views/List/ForRead') 
        },
        {
            path: 'forbuy',
            component: () => import('views/List/ForBuy') 
        },
        {
            path: 'like',
            component: () => import('views/List/Like') 
        },
        {
            path: '/list',
            redirect: '/List/ForRead'
          }
    
    ]
}