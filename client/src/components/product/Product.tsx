import { Heart, ShoppingCart } from "lucide-react";
import { StaticProduct } from "@/static";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "../ui/card";
import { Button } from "../ui/button";
import { useMediaQuery } from "usehooks-ts";
import { Link } from "react-router-dom";

function Product() {
	const isMobile = useMediaQuery("(max-width: 768px)");
	console.log(isMobile);
	return (
		<div className="product ">
			<div
				className={`product-card flex flex-wrap ${
					isMobile ? "items-center justify-center gap-4" : "gap-10"
				}`}
			>
				{StaticProduct
					? StaticProduct?.map(item => (
							<Card className="w-[300px] p-4" key={item._id}>
								<CardContent className="relative">
									<Link to={`/${item._id}`} state={{ item }}>
										<img src={item.img[0]} />
									</Link>
									<Button variant={"heartButton"} className="p-1">
										<Heart />
									</Button>
									<Button variant={"heartButton"} className="p-1">
										<Heart color="#ff0000" fill="#ff0000" />
									</Button>
								</CardContent>
								<CardHeader>
									<Link to={`/${item._id}`} state={{ item }}>
										<CardTitle>{item.title}</CardTitle>
										<CardTitle className="text-[18px]">
											{item.price} so'm
										</CardTitle>
										<CardDescription>{item.desc}</CardDescription>
									</Link>
								</CardHeader>
								<CardFooter>
									<Button className="cursor-pointer" variant={"cardButton"}>
										<ShoppingCart />
									</Button>
								</CardFooter>
							</Card>
					  ))
					: "Products not found"}
			</div>
		</div>
	);
}

export default Product;
