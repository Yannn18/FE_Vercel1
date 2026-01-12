import priceFormatter from "@/app/utils/price.formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const cartList = [
  {
    name: "t-shirt",
    category: "running",
    price: 50000,
    qty: 2,
    imgUrl: "product-1.svg",
  },
  {
    name: "racket",
    category: "running",
    price: 70000,
    qty: 5,
    imgUrl: "product-2.svg",
  },
  {
    name: "shoes 1",
    category: "running 2",
    price: 45000,
    qty: 5,
    imgUrl: "product-3.svg",
  },
  {
    name: "shoes",
    category: "running 2",
    price: 45000,
    qty: 5,
    imgUrl: "product-4.svg",
  },
];

const CartPopup = () => {
  const { push } = useRouter();
  const handlecheckout = () => {
    push("/checkout");
  };

  const totalprice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
      {cartList.map((item, index) => (
        <div className="border border-gray-200 p-4 flex gap-3 " key={index}>
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={`/images/products/${item.imgUrl}`}
              alt={item.name}
              width={63}
              height={63}
              className="aspect-square object-contain"
            />
          </div>
          <div className="self-center">
            <div className="text-sm font-medium">{item.name}</div>
            <div className="flex gap-3 font-medium text-xs">
              <div className="text-primary">{item.qty}x</div>
              <div className="text-primary">{priceFormatter(item.price)}</div>
            </div>
          </div>
          <Button
            size="small"
            variant="ghost"
            className="w-7 h-7 p-0! self-center ml-auto"
          >
            <FiTrash2 />
          </Button>
        </div>
      ))}
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalprice)}
          </div>
        </div>
        <div>
          <Button
            variant="dark"
            size="small"
            className="w-full mt-4"
            onClick={handlecheckout}
          >
            Checkout Now <FiArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CartPopup;
