import Img from "@/assets/card-img.jpg";
import { Heart, ShoppingCart } from "lucide-react";
import { StaticProduct } from "@/static";

function Product() {
	return (
		<div className="product">
			<div className="product-card flex flex-wrap gap-12 items-start">
				{StaticProduct
					? StaticProduct?.map(item => (
							<div className="product-item p-2" key={item._id}>
								<div className="product__item-img w-72 relative mb-2">
									<img src={Img} alt="" />
									<div className="product__item-heart absolute top-2 right-0 hover:cursor-pointer">
										<Heart />
									</div>
								</div>
								<div className="product__item-body flex flex-col p-3">
									<span className="product__item-title text-lg text-center cursor-pointer">
										{item.title}
									</span>
									<span className="product__item-price">{item.price} so'm</span>
									<button className="product__item-add-to-card">
										<ShoppingCart />
									</button>
								</div>
							</div>
					  ))
					: "Products not found"}
			</div>
		</div>
	);
}

export default Product;
