import { Search } from "lucide-react";
import ContractCard from "./ContractCard";

const Contracts = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center">
      <div className="flex w-md justify-center items-center">
        <input
          type="text"
          placeholder={"Search a Crop"}
          className={`
        w-full 
        p-2 
        border-2 
        border-r-0
        rounded-tl-full
        rounded-bl-full
        pl-7
        focus:outline-none 
        max-w-md
        transition-all
        border-[var(--color-primaryGreen)] 
        text-[var(--color-thirdGreen)] 
        focus:border-[var(--color-secondaryGreen)] 
        placeholder-[var(--color-secondaryGreen)] 
        `}
        />
        <button
          className="bg-thirdGreen p-2  cursor-pointer rounded-tr-full
        rounded-br-full border-2 
        border-l-0 border-thirdGreen"
        >
          <Search className="text-white" />
        </button>
      </div>
      <div className=" grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-3 p-3 ">
        <ContractCard
          buyerName="Fresh Farm Produce"
          productType="Corn"
          quantity="400 tons"
          price={95000}
          deliveryDate="April 15, 2024"
          status="open"
        />

        <ContractCard
          buyerName="Healthy Harvest Ltd."
          productType="Barley"
          quantity="600 tons"
          price={110000}
          deliveryDate="May 10, 2024"
          status="closed"
        />

        <ContractCard
          buyerName="AgriGold"
          productType="Soybeans"
          quantity="300 tons"
          price={80000}
          deliveryDate="June 22, 2024"
          status="closed"
        />

        <ContractCard
          buyerName="Sunshine Grains"
          productType="Rice"
          quantity="700 tons"
          price={135000}
          deliveryDate="July 1, 2024"
          status="open"
        />

        <ContractCard
          buyerName="Pure Organics"
          productType="Sugarcane"
          quantity="350 tons"
          price={65000}
          deliveryDate="August 5, 2024"
          status="closed"
        />

        <ContractCard
          buyerName="Harvest Foods Inc."
          productType="Quinoa"
          quantity="450 tons"
          price={90000}
          deliveryDate="September 12, 2024"
          status="open"
        />

        <ContractCard
          buyerName="Organic World"
          productType="Oats"
          quantity="500 tons"
          price={120000}
          deliveryDate="October 19, 2024"
          status="closed"
        />

        <ContractCard
          buyerName="Farm Fresh Co."
          productType="Millet"
          quantity="550 tons"
          price={115000}
          deliveryDate="November 25, 2024"
          status="open"
        />

        <ContractCard
          buyerName="Green Valley"
          productType="Lentils"
          quantity="250 tons"
          price={60000}
          deliveryDate="December 15, 2024"
          status="closed"
        />

        <ContractCard
          buyerName="Natural Grains Ltd."
          productType="Peas"
          quantity="350 tons"
          price={75000}
          deliveryDate="January 10, 2025"
          status="open"
        />

        <ContractCard
          buyerName="Eco Foods"
          productType="Chickpeas"
          quantity="200 tons"
          price={50000}
          deliveryDate="February 28, 2025"
          status="closed"
        />

        <ContractCard
          buyerName="Organic Harvest"
          productType="Sorghum"
          quantity="300 tons"
          price={70000}
          deliveryDate="March 8, 2025"
          status="open"
        />

        <ContractCard
          buyerName="Earth's Bounty"
          productType="Barley"
          quantity="450 tons"
          price={105000}
          deliveryDate="April 20, 2025"
          status="closed"
        />

        <ContractCard
          buyerName="Sustainable Farms"
          productType="Wheat"
          quantity="550 tons"
          price={130000}
          deliveryDate="May 14, 2025"
          status="open"
        />

        <ContractCard
          buyerName="Farmers' Pride"
          productType="Rice"
          quantity="600 tons"
          price={140000}
          deliveryDate="June 3, 2025"
          status="closed"
        />
      </div>
    </div>
  );
};
export default Contracts;
