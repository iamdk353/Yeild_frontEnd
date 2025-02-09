import { User, Calendar, Wheat, IndianRupee, Box } from "lucide-react";

import { productType } from "../interface/interface";
import { Link } from "react-router";
import useStore from "../state/store";
const ProductCard: React.FC<productType> = ({
  buyerName,
  deliveryDate,
  price,
  productId,
  productName,
  quantity,
}) => {
  const stateUser = useStore((state) => state.user);
  return (
    <div>
      {stateUser.userType === "farmer" ? (
        <Link to={"product/" + productId}>
          <div className="p-6 rounded-lg shadow-md w-full mx-auto border border-primaryGreen/50 hover:scale-[1.01] transition-all hover:shadow-xl cursor-pointer">
            <div>
              <h2 className="text-2xl font-bold text-primaryGreen mb-4 flex justify-center items-center">
                <Wheat className="mx-2" />
                {productName}
              </h2>

              <div className="space-y-3">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-secondaryGreen mr-2" />
                  <span className="text-xl text-thirdGreen">{buyerName}</span>
                </div>
                <div className="flex items-center text-xl">
                  <Box className="w-5 h-5 text-secondaryGreen mr-2" />
                  <span className="text-thirdgreen mr-2 flex">Quantity:</span>
                  <span className="font-semibold text-primaryGreen">
                    {quantity}{" "}
                    <span className="text-[1rem] text-gray-400">
                      in quintals
                    </span>
                  </span>
                </div>
                <div className="flex items-center text-xl">
                  <IndianRupee className="w-5 h-5 text-secondaryGreen mr-2" />
                  <span className="font-semibold text-primaryGreen mr-2">
                    {price.toFixed(2)}
                  </span>
                  <span className="text-[1rem] text-gray-400">per quintal</span>
                </div>
                <div className="flex items-center text-xl">
                  <Calendar className="w-5 h-5 text-secondaryGreen mr-2" />
                  <span className="text-thirdgreen">
                    Delivery: {deliveryDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="p-6 rounded-lg shadow-md w-full mx-auto border border-primaryGreen/50 transition-all cursor-default">
          <div>
            <h2 className="text-2xl font-bold text-primaryGreen mb-4 flex justify-center items-center">
              <Wheat className="mx-2" />
              {productName}
            </h2>

            <div className="space-y-3">
              <div className="flex items-center">
                <User className="w-5 h-5 text-secondaryGreen mr-2" />
                <span className="text-xl text-thirdGreen">{buyerName}</span>
              </div>
              <div className="flex items-center text-xl">
                <Box className="w-5 h-5 text-secondaryGreen mr-2" />
                <span className="text-thirdgreen mr-2 flex">Quantity:</span>
                <span className="font-semibold text-primaryGreen">
                  {quantity}{" "}
                  <span className="text-[1rem] text-gray-400">in quintals</span>
                </span>
              </div>
              <div className="flex items-center text-xl">
                <IndianRupee className="w-5 h-5 text-secondaryGreen mr-2" />
                <span className="font-semibold text-primaryGreen mr-2">
                  {price.toFixed(2)}
                </span>
                <span className="text-[1rem] text-gray-400">per quintal</span>
              </div>
              <div className="flex items-center text-xl">
                <Calendar className="w-5 h-5 text-secondaryGreen mr-2" />
                <span className="text-thirdgreen">
                  Delivery: {deliveryDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductCard;
