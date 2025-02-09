import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { MyContractsType } from "../../interface/interface";
import useStore from "../../state/store";
import { Link } from "react-router";

const MyContracts = () => {
  const stateUser = useStore((state) => state.user);
  const { data } = useQuery<MyContractsType[] | AxiosError>({
    queryKey: ["contracts"],
    queryFn: getAllContracts,
  });
  async function getAllContracts() {
    const { data } = await axios.post<MyContractsType[]>("/getproducts", {
      email: stateUser.email,
      userType: stateUser.userType,
    });
    console.log(data);
    return data;
  }
  return (
    <div className="pt-25">
      {data &&
        Array.isArray(data) &&
        data.map((contract) => (
          <Link
            to={"/app/product-preview/" + contract.productId}
            key={contract.productId}
          >
            <div
              className="flex flex-col w-full bg-thirdGreen/70 shadow-md rounded-lg my-4 p-6 max-w-4xl mx-auto"
              key={contract.productId}
            >
              <div className="text-2xl font-semibold text-white mb-2">
                {contract.productName}
              </div>
              <div className="text-lg text-white mb-1">
                Product ID: {contract.productId}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};
export default MyContracts;
