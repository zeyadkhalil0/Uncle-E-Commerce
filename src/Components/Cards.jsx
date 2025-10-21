import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../API/FetchData";
import ProductCard from "../design/ProductCard"
import Loader from "./Loader";
const Cards = () => {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts("https://fakestoreapi.com/products");
      setProducts(data);

      const imagePromises = data.slice(14, 20).map(
        (item) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = item.image;
            img.onload = resolve;
            img.onerror = resolve;
          })
      );

      await Promise.all(imagePromises);
      setLoading(false);
    };

    getData();
  }, []);
  
  if (loading) {
    return (
      <div className="absolute bg-gray-200 inset-0 w-full h-screen flex items-center justify-center  text-xl font-semibold text-gray-600 z-50">
        <Loader />
      </div>
    );
  }

  return (
    <>
    <section className="py-10 my-20  bg-gray-100">

      <div id="popular" className="text-center my-16">
        <h1 className="text-4xl font-bold text-gray-800">Common Items</h1>
      </div>

      <section className="flex flex-wrap items-center justify-center gap-10">
        {Products.slice(14, 20).map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
            price={item.price}
            badge="NEW"
          />

          
        ))}
      </section>
      <div className="text-center mt-12">
        <Link
          to="/products"
          className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-800 transition"
        >
          View All Products
        </Link>
      </div>
      </section>
    </>
  );
};

export default React.memo(Cards);
