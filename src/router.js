import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTER } from './Utils/router';
import HomePage from './Page/Home/home';
import LoginPage from './Page/Login/login';
import CartPage from './Page/Cart/cart';
import MasterLayout from './Page/Home/MasterLayout/master_layout';
import RegisterPage from './Page/Register/register';
import { Products } from './Page/Products/products';
import { Orders } from './Page/Orders/oders';
import { Profile } from './Page/Profile/profile';
import { AdminHome } from './Page/Admin/admin';
import BookDetails from './Page/ProductDetail/productDetail';
import AdminProduct from './Page/Admin/pages/product/AdminProduct';
import AdminLayout from './Page/Admin/components/layout/AdminLayout';
import NotFound from './Page/Admin/components/NotFound';
import AdminOrder from './Page/Admin/pages/order/AdminOrder';
import AdminAddProduct from './Page/Admin/pages/add-product/AdminAddProduct';
import AdminProfile from './Page/Admin/pages/profile/AdminProfile';
import AdminWallet from './Page/Admin/pages/wallet/AdminWallet';

export const mainRouter = createBrowserRouter([
	{
		element: <MasterLayout />,
		children: [
			{ path: ROUTER.USER.HOME, element: <HomePage /> },
			{ path: ROUTER.USER.PROFILE, element: <Profile /> },
			{ path: ROUTER.USER.SHOPCART, element: <CartPage /> },
			{ path: ROUTER.USER.PRODUCTS, element: <Products /> },
			{ path: ROUTER.USER.ORDERS, element: <Orders /> },
			{ path: ROUTER.USER.PRODUCTDETAIL, element: <BookDetails /> },
		],
	},
	{ path: ROUTER.USER.LOGIN, element: <LoginPage /> },
	{ path: ROUTER.USER.REGISTER, element: <RegisterPage /> },

	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{ path: ROUTER.ADMIN.HOME, element: <AdminHome /> },
			{ path: ROUTER.ADMIN.PRODUCT, element: <AdminProduct /> },
			{ path: ROUTER.ADMIN.ORDER, element: <AdminOrder /> },
			{ path: ROUTER.ADMIN.ADD_PRODUCT, element: <AdminAddProduct /> },
			{ path: ROUTER.ADMIN.PROFILE, element: <AdminProfile /> },
			{ path: ROUTER.ADMIN.WALLET, element: <AdminWallet /> },
			{ path: '*', element: <NotFound /> },
		],
	},
]);
