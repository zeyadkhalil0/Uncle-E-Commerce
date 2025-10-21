import React, { useEffect, useState } from "react";
import { fetchProducts } from "../API/FetchData";
import ProductCard from "../design/ProductCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const [Products, setProducts] = useState([]);

  // ✅ Initialize AOS once when component mounts
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  // ✅ Fetch all products
  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts("https://fakestoreapi.com/products");
      setProducts(data);

      // ✅ Refresh AOS after loading data
      setTimeout(() => {
        Aos.refreshHard();
      }, 500);
    };

    getData();
  }, []);

  return (
    <>
      <section className="py-10 bg-gray-100">
        {/* Section Title */}
        <div
          id="popular"
          className="text-center my-16"
          data-aos="fade-down"
        >
          <h1 className="md:text-4xl text-3xl font-bold text-gray-800">
            All Items
          </h1>
        </div>

        {/* Product Cards */}
        <section
          className="flex flex-wrap items-center justify-center md:gap-10 gap-8"
          data-aos="fade-up"
        >
          {Products.slice(0, 20).map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 80} // staggered animation for each card
            >
              <ProductCard
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                price={item.price}
                badge="NEW"
              />
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default React.memo(Products);
