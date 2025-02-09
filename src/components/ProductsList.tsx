import axios from "axios";
import ProductCard from "./ProductCard";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { productType } from "../interface/interface";
import toast from "react-hot-toast";

const ProductsList = () => {
  const { data, isPending, isError, failureReason } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  isError &&
    toast.error(
      failureReason?.message.toLocaleLowerCase() === "network error"
        ? "Internal server Error"
        : failureReason?.message || "Unexpected error"
    );

  console.log(data);

  return (
    <div className="pt-20 min-h-screen">
      {/* <div className="w-[80%] bg-primaryGreen mx-auto p-2 sticky top-17 bg-blend-soft-light">
        filters
        // todo add types to tanstack query
        // todo Add filters
      </div> */}
      {isPending ? (
        <Loader2 className="animate-spin mx-auto mt-4" />
      ) : (
        <div className="px-10 py-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {data &&
            data.map((data: productType, key: number) => (
              <ProductCard
                buyerId={data.buyerId}
                buyerName={data.buyerName}
                deliveryDate={data.deliveryDate}
                price={data.price}
                productId={data.productId}
                productName={data.productName}
                quantity={data.quantity}
                key={key}
              />
            ))}
        </div>
      )}
    </div>
  );
};
export default ProductsList;

async function getProducts() {
  const { data } = await axios.get("/products");
  return data;
}
