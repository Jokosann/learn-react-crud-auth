import NavList from "../../atoms/NavList";

const Navbar = () => {
	return (
		<div className="shadow flex px-20 py-5 justify-between items-center fixed top-0 left-0 w-full">
			<div>
				<div className="font-bold text-2xl">Hot Coffe</div>
			</div>
			<div>
				<input type="text" placeholder="Search" className="rounded-full" />
			</div>
			<div>
				<ul className="flex gap-5">
					<NavList href="/">Home</NavList>
					<NavList href="/blog">Blog</NavList>
					<NavList href="/login">Login</NavList>
					<NavList href="/register">Register</NavList>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
