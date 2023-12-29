import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import RegisterPage from "./pages/Register";
import BlogPage from "./pages/Blog";
import Login from "./pages/Login";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/register",
			element: <RegisterPage />,
		},
		{
			path: "/blog",
			element: <BlogPage />,
		},
		{
			path: "/login",
			element: <Login />,
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
