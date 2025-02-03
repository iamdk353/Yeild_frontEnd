import { Calendar, FileCheck, Wheat, IndianRupee } from "lucide-react";
interface ContractCardProps {
  buyerName: string;
  productType: string;
  quantity: string;
  price: number;
  deliveryDate: string;
  status: "open" | "closed";
}
export default function ContractCard({
  buyerName,
  productType,
  quantity,
  price,
  deliveryDate,
  status,
}: ContractCardProps) {
  return (
    <div
      className="p-6 rounded-lg shadow-lg h-[17rem] "
      style={{ backgroundColor: "#efe3c2" }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold" style={{ color: "#123524" }}>
          {buyerName}
        </h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            status === "open"
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
          <Wheat className="w-5 h-5" style={{ color: "#85a947" }} />
          <div>
            <p className="text-sm text-gray-600">Product</p>
            <p className="font-semibold" style={{ color: "#3e7b27" }}>
              {productType}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <Calendar className="w-5 h-5" style={{ color: "#85a947" }} />
          <div>
            <p className="text-sm text-gray-600">Delivery Date</p>
            <p className="font-semibold" style={{ color: "#3e7b27" }}>
              {deliveryDate}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <FileCheck className="w-5 h-5" style={{ color: "#85a947" }} />
          <div>
            <p className="text-sm text-gray-600">Quantity</p>
            <p className="font-semibold" style={{ color: "#3e7b27" }}>
              {quantity}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <IndianRupee className="w-5 h-5" style={{ color: "#85a947" }} />
          <div>
            <p className="text-sm text-gray-600">Price</p>
            <p className="font-semibold" style={{ color: "#3e7b27" }}>
              {price.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
