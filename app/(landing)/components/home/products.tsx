import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productList = [
  {
    name: "t-shirt",
    category: "running",
    price: 50000,
    imgUrl: "product-1.svg",
  },
  {
    name: "racket",
    category: "running",
    price: 70000,
    imgUrl: "product-2.svg",
  },
  {
    name: "shoes",
    category: "running",
    price: 45000,
    imgUrl: "product-3.svg",
  },
  {
    name: "shoes 2",
    category: "running",
    price: 23000,
    imgUrl: "product-4.svg",
  },
  {
    name: "t-shirt 2",
    category: "running",
    price: 20000,
    imgUrl: "product-5.svg",
  },
  {
    name: "ball",
    category: "running",
    price: 100000,
    imgUrl: "product-6.svg",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto">
      <h2 className="font-bold italic text-4xl text-center mt-32">
        <span className="text-primary">OUR </span>
        PRODUCTS
      </h2>

      <div className="grid grid-cols-4 gap-5 pb-15">
        {productList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3 ">
                <FiPlus size={24} />
              </Button>
            </div>

            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default ProductsSection;
