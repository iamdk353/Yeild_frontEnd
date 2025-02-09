import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import AgreementCard from "./AgreementCard";

import { ServerResponseType } from "../interface/interface";

const SingleProduct = () => {
  const { id } = useParams();
  async function fetchProductById() {
    const { data } = await axios.get<ServerResponseType>("/product/" + id);
    return data;
  }

  const { data, isPending } = useQuery<ServerResponseType, AxiosError>({
    queryKey: ["product", id],
    queryFn: fetchProductById,
  });

  return (
    <div className="">
      {data &&
        data.msg.map((data, key: number) => {
          return (
            <div key={key}>
              <AgreementCard
                buyerId={data.buyerId}
                buyerName={data.buyerName}
                buyerTerms={data.buyerTerms}
                deliveryDate={data.deliveryDate}
                farmerTerms={null}
                price={data.price}
                productId={Number(id)}
                productName={data.productName}
                quantity={data.quantity}
                isFetching={isPending}
              />
            </div>
          );
        })}
    </div>
  );
};
export default SingleProduct;
