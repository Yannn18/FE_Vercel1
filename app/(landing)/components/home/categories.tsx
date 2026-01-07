import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const categoriesList = [
  {
    name: "badminton",
    imgUrl: "category-badminton.svg",
  },
  {
    name: "basketball",
    imgUrl: "category-basketball.svg",
  },
  {
    name: "football",
    imgUrl: "category-football.svg",
  },
  {
    name: "running",
    imgUrl: "category-running.svg",
  },
  {
    name: "swimming",
    imgUrl: "category-swimming.svg",
  },
  {
    name: "tennis",
    imgUrl: "category-tennis.svg",
  },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium ">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8">
        {categoriesList.map((category, index) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
            key={index}
          >
            <div className="self-center">
              <Image
                src={`/images/categories/${category.imgUrl}`}
                alt={category.name}
                width={86}
                height={86}
                className="mb-[10px]"
              />
              <div className="text-primary font-medium text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CategoriesSection;
