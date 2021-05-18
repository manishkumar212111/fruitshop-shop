import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";


export default [
    {
        path: "/:userName",
        component: Home,
        exact: true,
    },
    {
        path: "/:userName/:productId",
        component: Detail,
        exact: true,
    },    
];
