import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../API/FetchData";
import ProductCard from "../design/OffersCard";
import Loader from "./Loader";
const Offers = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts(
        "https://ylfxybktrtvtdjpubqvn.supabase.co/rest/v1/products?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZnh5Ymt0cnR2dGRqcHVicXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNjQxODksImV4cCI6MjA3MDc0MDE4OX0.vSsgxe1HBLSKG48er3n9Ru0F6tBFnJBNjGSh0DdRknU"
      );
      setProducts(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="absolute inset-0 w-full h-screen flex items-center justify-center  text-xl font-semibold text-gray-600">
        <Loader />
      </div>
    );
  }

  return (
    <>
    <section className="py-10 my-12 bg-gray-200">

      <div id="popular" className="text-center my-16">
        <h1 className="text-4xl font-bold text-gray-800">Limited-Time Discounts</h1>
      </div>

      <section className="flex flex-wrap  items-center justify-center gap-10">
        {Products.slice(0, 6).map((item, index) => (
          <ProductCard
            key={index}
            images={item.images[0]}
            title={item.title}
            description={item.description}
            slug_name={item.slug_name}
            price={item.price}
          />
        ))}
      </section> 
      <div className="text-center mt-12">
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

export default Offers;
