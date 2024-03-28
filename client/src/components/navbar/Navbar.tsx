import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar py-5 bg-zinc-900">
			<div className="container xl flex flex-row items-center justify-between">
				<div className="navbar__logo">
					<Link to={"/"} className="font-sans text-white text-2xl">
						Orgtech.uz
					</Link>
				</div>
				<div className="navbar__list">
					<ul className="list-none flex flex-row gap-5">
						<li className="navbar__list-item">
							<Link
								to={"/profile"}
								className="flex flex-row gap-2 items-center "
							>
								<User color="#fff" size={"20"} />
								<span className="text-white text-x">Kirish</span>
							</Link>
						</li>
						<li className="navbar__list-item">
							<Link
								to={"/favorites"}
								className="flex flex-row gap-2 items-center"
							>
								<Heart color="#fff" size={"20"} />
								<span className="text-white text-x">Saralangan</span>
							</Link>
						</li>
						<li className="navbar__list-item">
							<Link to={"/cart"} className="flex flex-row gap-2 items-center">
								<ShoppingCart color="#fff" size={"20"} />
								<span className="text-white text-x">Savatcha</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
