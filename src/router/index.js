import Home from '../views/Home/index';
import Login from '../views/Login'; 
import Register from '../views/Register'; 

export default [
    {
        path: "/",
        exact: true,
        name: "Home",
        icon: '',
        component: Home
    },
    {
        collapse: true,
        path: "/",
        name: 'common.navigation.your_trips',
        id: 'your_trips',
        state: "openComponents",
        icon: 'Apps',
        views: [
            {
                path: "/register",
                name: "Register",
                icon: '',
                component: Register
            },
            {
                path: "/login",
                name: "Login",
                icon: '',
                component: Login
            },
        ]
    },
    // { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];