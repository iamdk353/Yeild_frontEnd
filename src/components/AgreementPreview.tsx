// import { IndianRupee, Loader2, Mail } from "lucide-react";
// import { AgreementType } from "../interface/interface";
import useStore from "../state/store";
// // import { useState } from "react";
// import { useNavigate } from "react-router";
// import { useRef } from "react";
// import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import toast from "react-hot-toast";

import { useParams } from "react-router";
import { ServerResponseType } from "../interface/interface";
import { IndianRupee, Loader2 } from "lucide-react";

const AgreementPreview = () => {
  // const redirect = useNavigate();
  const stateUser = useStore((state) => state.user);
  const { id } = useParams();
  async function getSingleContract() {
    const { data } = await axios.get<ServerResponseType>(`/product/${id}`);
    return data.msg;
  }
  const { data, isFetching } = useQuery({
    queryKey: ["contracts", id],
    queryFn: getSingleContract,
  });

  return (
    <div className="min-h-screen bg-[#efe3c2]/50 py-20 flex justify-center">
      {!isFetching && data ? (
        data.map(
          ({
            productId,
            productName,
            buyerName,
            buyerId,
            quantity,
            farmerTerms,
            buyerTerms,
            deliveryDate,
            // isFetching,
            price,
          }) => (
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#3e7b27]">
                  Agreement Details
                </h2>
                <div className="space-y-6">
                  <div className="border-b border-[#85a947] pb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-[#123524]">
                          Product ID
                        </h3>
                        <p className="mt-1 text-lg">{productId.toString()}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#123524]">
                          Product Name
                        </h3>
                        <p className="mt-1 text-lg">{productName}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-[#85a947] pb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-[#123524]">
                          Buyer Name
                        </h3>
                        <p className="mt-1 text-lg break-all">{buyerName}</p>
                        <p className="mt-1 text-lg break-all flex items-center">
                          {buyerId}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#123524]">
                          Farmer Name
                        </h3>
                        <p className="mt-1 text-lg">{stateUser.name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-[#85a947] pb-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-[#123524]">
                          Quantity (in quintals)
                        </h3>
                        <p className="mt-1 text-lg">{quantity}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#123524]">
                          Price (per Quintal)
                        </h3>
                        <p className="mt-1 text-lg flex items-center">
                          <IndianRupee className="size-5" />
                          {price.toString()}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#123524]">
                          Total
                        </h3>
                        <p className="mt-1 text-xl font-bold flex items-center text-thirdGreen">
                          <IndianRupee className="size-5" />
                          {(Number(price) * Number(quantity)).toString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-[#85a947] pb-4">
                    <h3 className="text-sm font-medium text-[#123524]">
                      Delivery Date
                    </h3>
                    <p className="mt-1 text-lg">
                      {new Date(deliveryDate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-[#123524] mb-2">
                      Terms & Conditions
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg ">
                        <h4 className="text-sm font-medium text-[#3e7b27] mb-2 ">
                          Farmer Terms
                        </h4>
                        <p className="text-gray-600">
                          {farmerTerms || "No terms specified"}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-[#3e7b27] mb-2">
                          Buyer Terms
                        </h4>
                        <p className="text-gray-600">
                          {buyerTerms || "No terms specified"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      ) : (
        <div className="animate-pulse bg-zinc-300 w-1/2 flex justify-around flex-col items-center">
          <Loader2 className="animate-spin" />
        </div>
      )}
    </div>
  );
};
export default AgreementPreview;
