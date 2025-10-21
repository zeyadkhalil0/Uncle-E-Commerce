import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../API/FetchData";
import ProductCard from "../design/OffersCard";
import Loader from "./Loader";
import Aos from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts(
        "https://ylfxybktrtvtdjpubqvn.supabase.co/rest/v1/products?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZnh5Ymt0cnR2dGRqcHVicXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNjQxODksImV4cCI6MjA3MDc0MDE4OX0.vSsgxe1HBLSKG48er3n9Ru0F6tBFnJBNjGSh0DdRknU"
      );

      setProducts(data);

      
      const imagePromises = data.slice(0, 6).map(
        (item) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = item.images?.[0];
            img.onload = resolve;
            img.onerror = resolve;
          })
      );

      await Promise.all(imagePromises);
      setLoading(false);

      
      setTimeout(() => {
        Aos.refreshHard();
      }, 500);
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="absolute bg-gray-200 inset-0 w-full h-screen flex items-center justify-center text-xl font-semibold text-gray-600 z-50">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <section className="py-10 mt-12 bg-gray-200">
        <div
          id="popular"
          className="text-center my-16"
          data-aos="fade-down"
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Limited-Time Discounts
          </h1>
        </div>

        <section
          className="flex flex-wrap items-center justify-center gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {Products.slice(0, 6).map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120} 
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

        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            to="/products"
            className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-800 transition"
          >
            Discover More
          </Link>
        </div>
      </section>
    </>
  );
};

export default React.memo(Offers);
