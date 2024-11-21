import { ROUTER } from "./Utils/router";
import HomePage from "./Page/Home/home";
import LoginPage from "./Page/Login/login";
import CartPage from "./Page/Cart/cart";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./Page/Home/MasterLayout/master_layout";
import RegisterPage from "./Page/Register/register";
import { Shop } from "./Page/Shop/shop";

const RenderRouter = () => {
    const userRouters = [
        {
            path: ROUTER.USER.HOME,
            Component: <HomePage />
        },
        {
            path: ROUTER.USER.LOGIN,
            Component: <LoginPage />
        },
        {
            path: ROUTER.USER.REGISTER,
            Component: <RegisterPage/>
        },
        {
            path: ROUTER.USER.PROFILE,
            Component: <HomePage />
        },
        {
            path: ROUTER.USER.SHOPCART,
            Component: <CartPage />
        },
        {
            path: ROUTER.USER.SHOP,
            Component: <Shop/>
        },
    ];

    return (
        <Routes>
            {userRouters.map((item, key) => (
                <Route
                    key={key}
                    path={item.path}
                    element={
                        item.Component.type === LoginPage || item.Component.type === RegisterPage 
                            ? item.Component 
                            : <MasterLayout>{item.Component}</MasterLayout>
                    }
                />
            ))}
        </Routes>
    );
};

export default RenderRouter;
