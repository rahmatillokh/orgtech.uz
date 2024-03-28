import Img from "@/assets/card-img.jpg";

function Product() {
	return (
		<div className="product">
			<div className="product-card flex flex-wrap gap-10">
				<div className="product-item">
					<div className="product__item-img w-80">
						<img src={Img} alt="" />
					</div>
				</div>
				<div className="product-item">
					<div className="product__item-img w-80">
						<img src={Img} alt="" />
					</div>
				</div>
				<div className="product-item">
					<div className="product__item-img w-80">
						<img src={Img} alt="" />
					</div>
				</div>
				<div className="product-item">
					<div className="product__item-img w-80">
						<img src={Img} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
