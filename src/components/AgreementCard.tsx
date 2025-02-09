import { IndianRupee, Loader2, Mail } from "lucide-react";
import { AgreementType } from "../interface/interface";
import useStore from "../state/store";
// import { useState } from "react";
import { useNavigate } from "react-router";
import { useRef } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
const AgreementCard = ({
  productId,
  buyerId,
  buyerName,
  deliveryDate,
  price,
  productName,
  quantity,
  buyerTerms,
  isFetching,
}: AgreementType) => {
  const redirect = useNavigate();
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (agreementObj: acceptAgreement) => {
      return axios.patch("/product-accept", agreementObj);
    },
  });
  const stateUser = useStore((state) => state.user);
  interface acceptAgreement {
    farmerTerms: string | null;
    email: string;
    id: Number;
  }
  const farmerTermEle = useRef<HTMLTextAreaElement>(null);
  if (isSuccess) {
    toast.success("Aggreed to contract");
    redirect("/");
  }
  isError && toast.error("error while agreeing");
  return (
    <div className="min-h-screen bg-[#efe3c2]/50 py-20 flex justify-center">
      {!isFetching ? (
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
                      <Mail className="mr-3 text-thirdGreen" /> {buyerId}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#123524]">
                      Farmer Name
                    </h3>
                    <p className="mt-1 text-lg">
                      {stateUser.name || "Not assigned"}
                    </p>
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
                    <textarea
                      className="w-full border-0 ring ring-primaryGreen focus:ring-primaryGreen p-4"
                      ref={farmerTermEle}
                    ></textarea>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-[#3e7b27] mb-2">
                      Buyer Terms
                    </h4>
                    <p className="text-gray-600">
                      {buyerTerms || "No terms specified"}
                    </p>
                  </div>
                  {buyerTerms && (
                    <div className="flex space-x-3 ">
                      <input
                        id="agree"
                        type="checkbox"
                        className="w-5 h-5 border border-gray-400 checked:bg-emerald-900 
                 focus:ring-0 focus:ring-offset-0 
                 checked:hover:bg-emerald-900 checked:focus:bg-emerald-900
                 accent-emerald-900"
                      />
                      <label htmlFor="agree">
                        I have read the terms and conditions
                      </label>
                    </div>
                  )}
                  <div>
                    <button
                      className="p-3 bg-thirdGreen text-white rounded-2xl shadow-xl cursor-pointer hover:scale-[1.02] transition"
                      onClick={() => {
                        mutate({
                          farmerTerms: farmerTermEle.current?.value || null,
                          email: stateUser.email,
                          id: productId,
                        });
                      }}
                    >
                      {!isPending ? (
                        "Accept Agreement"
                      ) : (
                        <Loader2 className="animate-spin" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-pulse bg-zinc-300 w-1/2 flex justify-around flex-col items-center">
          <Loader2 className="animate-spin" />
        </div>
      )}
    </div>
  );
};
export default AgreementCard;
