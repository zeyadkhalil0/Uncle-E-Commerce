import React, { useEffect, useState } from "react";
import { fetchProducts } from "../API/FetchData";
import ProductCard from "../design/OffersCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  const [Products, setProducts] = useState([]);

  // ✅ Initialize AOS once when component mounts
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  // ✅ Fetch products data
  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts(
        "https://ylfxybktrtvtdjpubqvn.supabase.co/rest/v1/products?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZnh5Ymt0cnR2dGRqcHVicXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNjQxODksImV4cCI6MjA3MDc0MDE4OX0.vSsgxe1HBLSKG48er3n9Ru0F6tBFnJBNjGSh0DdRknU"
      );
      setProducts(data);

      // ✅ Refresh AOS after products are loaded
      setTimeout(() => {
        Aos.refreshHard();
      }, 500);
    };

    getData();
  }, []);

  return (
    <>
      <section className="py-10 bg-gray-200">
        {/* Section Title */}
        <div
          id="popular"
          className="text-center my-16"
          data-aos="fade-down"
        >
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800">
            Hot Offers You Can't Miss
          </h1>
        </div>

        {/* Product Cards Section */}
        <section
          className="flex flex-wrap items-center justify-center md:gap-10 gap-8"
          data-aos="fade-up"
        >
          {Products.slice(6, 27).map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Each card appears slightly after the previous one
            >
              <ProductCard
                images={item.images[0]}
                title={item.title}
                description={item.description}
                slug_name={item.slug_name}
                price={item.price}
              />
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default React.memo(Offers);
