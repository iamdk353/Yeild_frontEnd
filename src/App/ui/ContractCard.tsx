import { Package, Calendar } from "lucide-react";
import { contractType } from "../../interface/interface";

export const ContractCard = ({
  buyerName,
  productType,
  quantity,
  price,
  deliveryDate,
}: contractType) => {
  return (
    <div className="rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow bg-white cursor-pointer w-full border border-secondaryGreen space-y-4 h-[13rem]">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-thirdGreen font-bold text-xl flex items-center">
          {buyerName}
        </h3>
        <span className="text-primaryGreen font-semibold">{productType}</span>
      </div>
      <div className="space-y-4">
        <p className="text-thirdGreen flex items-center">
          <Package className="mr-2" /> Quantity:{" "}
          <span className="font-semibold">{quantity}</span>
        </p>
        <p className="text-thirdGreen flex items-center">
          Price:{" "}
          <span className="ml-2 font-semibold">
            {price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </span>
        </p>
        <p className="text-secondaryGreen flex items-center">
          <Calendar className="mr-2" /> Delivery: {deliveryDate}
        </p>
      </div>
    </div>
  );
};
