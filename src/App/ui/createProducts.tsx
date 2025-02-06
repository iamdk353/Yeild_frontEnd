import { z } from "zod";
import useStore from "../../state/store";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router";
import { Loader2 } from "lucide-react";

const createProduct = () => {
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<typeProductValidator>();
  const stateUser = useStore((state) => state.user);
  const productValidator = z.object({
    buyerId: z.string().email(),
    quantity: z.number().positive(),
    productName: z.string().min(3, "minimum 3 characters").nonempty(),
    price: z.number().positive(),
    deliveryDate: z.string().refine(
      (date) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(date)) {
          return false;
        }
        const [year, month, day] = date.split("-").map(Number);
        const deliveryDate = new Date(year, month - 1, day); // Month is 0-indexed
        const today = new Date();

        today.setHours(0, 0, 0, 0);
        deliveryDate.setHours(0, 0, 0, 0);
        const oneMonthAhead = new Date(today);
        oneMonthAhead.setMonth(today.getMonth() + 1);

        return deliveryDate >= oneMonthAhead;
      },
      {
        message: "At least one month ahead",
      }
    ),
  });
  type typeProductValidator = z.infer<typeof productValidator>;

  const productSubmit = handleSubmit(async (e) => {
    const { price, quantity } = e;

    const result = productValidator.safeParse({
      ...e,
      price: Number(price),
      quantity: Number(quantity),
      buyerId: stateUser.email,
    });
    // xtodo make api call

    if (result.success) {
      console.log(result.data);
      try {
        const resp = await axios.post("/products", result.data);
        const data = await resp.data;
        toast.success(data.msg);
        reset();
        redirect("/");
      } catch (error) {
        toast.error("internal server error");
        reset();
      }
    } else {
      toast.error(
        result.error.errors[0].message + " in " + result.error.errors[0].path
      );
    }
  });
  return (
    <div className="min-h-screen pt-20 bg-lastCream/40">
      <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-thirdGreen">
          Create Product
        </h2>

        <form className="space-y-4" onSubmit={productSubmit}>
          <div>
            <label
              htmlFor="buyerName"
              className="block text-sm font-medium mb-1 text-secondaryGreen"
            >
              Buyer Name
            </label>
            <input
              required
              type="text"
              id="buyerName"
              defaultValue={stateUser.name}
              name="buyerName"
              className="w-full px-4 py-2 rounded border border-primaryGreen focus:outline-none focus:ring-2 focus:ring-secondaryGreen"
            />
          </div>

          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium mb-1 text-secondaryGreen"
            >
              Product Name
            </label>
            <input
              required
              {...register("productName")}
              type="text"
              id="productName"
              name="productName"
              className="w-full px-4 py-2 rounded border border-primaryGreen focus:outline-none focus:ring-2 focus:ring-secondaryGreen"
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium mb-1 text-secondaryGreen"
            >
              Quantity (in quintals)
            </label>
            <input
              required
              type="number"
              {...register("quantity")}
              id="quantity"
              name="quantity"
              className="w-full px-4 py-2 rounded border border-primaryGreen focus:outline-none focus:ring-2 focus:ring-secondaryGreen"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium mb-1 text-secondaryGreen"
            >
              Price (in rupees)
            </label>
            <input
              required
              {...register("price")}
              type="number"
              id="price"
              name="price"
              className="w-full px-4 py-2 rounded border border-primaryGreen focus:outline-none focus:ring-2 focus:ring-secondaryGreen"
            />
          </div>

          <div>
            <label
              htmlFor="deliveryDate"
              className="block text-sm font-medium mb-1 text-secondaryGreen"
            >
              Delivery Date
            </label>
            <input
              required
              {...register("deliveryDate")}
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              className="w-full px-4 py-2 rounded border border-primaryGreen focus:outline-none focus:ring-2 focus:ring-secondaryGreen"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded font-medium text-white bg-primaryGreen hover:opacity-90 transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin mx-auto" />
            ) : (
              "Create Contract"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default createProduct;
