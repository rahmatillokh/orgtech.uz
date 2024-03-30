import { ShoppingCart } from "lucide-react";
import { StaticProduct } from "@/static";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function Product() {
  return (
    <div className="product">
      <div className="product-card flex flex-wrap gap-12 items-start">
        {StaticProduct
          ? StaticProduct?.map((item) => (
              <Card className="w-[300px]">
                <CardContent>{/* <img src={Img} /> */}</CardContent>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <ShoppingCart />
                </CardFooter>
              </Card>
            ))
          : "Products not found"}
      </div>
    </div>
  );
}

export default Product;
