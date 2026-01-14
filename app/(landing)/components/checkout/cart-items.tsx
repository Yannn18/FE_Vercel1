"use client";
import Image from "next/image";

import Button from "../ui/button";
import { FiArrowRight, FiCreditCard, FiTrash2 } from "react-icons/fi";
import priceFormatter from "@/app/utils/price.formatter";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

type TCartItems = {
  handlePayment: () => void;
};
const CartItems = ({ handlePayment }: TCartItems) => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();
  const payment = () => {};

  const totalprice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  return (
    <CardWithHeader title="Cart Items">
      <div className="flex flex-col justify-between h-[calc(100%-70px)]">
        <div className="overflow-auto max-h-[300px] ">
          {items.map((item) => (
            <div
              className="border border-gray-200 p-4 flex gap-3 "
              key={item._id}
            >
              <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                <Image
                  src={getImageUrl(item.imageUrl)}
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
                  <div className="text-primary">
                    {priceFormatter(item.price)}
                  </div>
                </div>
              </div>
              <Button
                size="small"
                variant="ghost"
                className="w-7 h-7 p-0! self-center ml-auto"
                onClick={() => removeItem(item._id)}
              >
                <FiTrash2 />
              </Button>
            </div>
          ))}
        </div>
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
              className="w-full mt-4 "
              onClick={handlePayment}
            >
              <FiCreditCard />
              Proceed To Payment
            </Button>
          </div>
        </div>
      </div>
    </CardWithHeader>
  );
};
export default CartItems;
