import Home from "../components/Layout/Home"
import About from "../components/Layout/About"
import Products from "../components/Layout/Products"
import Carts from "../components/Layout/Carts"

export const publicRouters = [
    {path: '/', component: Home },
    {path: '/about', component: About },
    {path: '/product', component: Products },
    {path: '/carts', component: Carts },

]