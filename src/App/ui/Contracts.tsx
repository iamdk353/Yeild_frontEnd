import { useState } from "react";
import { ContractCard } from "./ContractCard";

const Contracts = () => {
  const [filters, setFilters] = useState({
    buyerName: "",
    productType: "",
    minPrice: "",
    maxPrice: "",
  });

  const contractData = [
    {
      buyerName: "Fresh Farm Produce",
      productType: "Corn",
      quantity: "400 tons",
      price: 95000,
      deliveryDate: "April 15, 2024",
    },
    {
      buyerName: "Green Valley Farms",
      productType: "Wheat",
      quantity: "250 tons",
      price: 78000,
      deliveryDate: "May 1, 2024",
    },
    {
      buyerName: "Organic Harvest",
      productType: "Soybeans",
      quantity: "300 tons",
      price: 112000,
      deliveryDate: "April 30, 2024",
    },
  ];

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredContracts = contractData.filter((contract) => {
    return (
      (filters.buyerName === "" ||
        contract.buyerName
          .toLowerCase()
          .includes(filters.buyerName.toLowerCase())) &&
      (filters.productType === "" ||
        contract.productType
          .toLowerCase()
          .includes(filters.productType.toLowerCase())) &&
      (filters.minPrice === "" || contract.price >= Number(filters.minPrice)) &&
      (filters.maxPrice === "" || contract.price <= Number(filters.maxPrice))
    );
  });

  return (
    <div className="min-h-screen pt-20 flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-4xl px-4 mb-6">
        <div className="bg-primaryGreen rounded-lg p-4 shadow-md">
          <div className="grid md:grid-cols-4 gap-3">
            <input
              type="text"
              name="buyerName"
              placeholder="Buyer Name"
              value={filters.buyerName}
              onChange={handleFilterChange}
              className="p-2 rounded bg-white text-thirdGreen focus:outline-secondaryGreen"
            />
            <input
              type="text"
              name="productType"
              placeholder="Product Type"
              value={filters.productType}
              onChange={handleFilterChange}
              className="p-2 rounded bg-white text-thirdGreen focus:outline-secondaryGreen"
            />
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="p-2 rounded bg-white text-thirdGreen focus:outline-secondaryGreen"
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="p-2 rounded bg-white text-thirdGreen focus:outline-secondaryGreen"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-3 p-3 w-full min-h-screen">
        {filteredContracts.map((contract, index) => (
          <ContractCard
            key={index}
            buyerName={contract.buyerName}
            productType={contract.productType}
            quantity={contract.quantity}
            price={contract.price}
            deliveryDate={contract.deliveryDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Contracts;
