import React, { useEffect, useState } from "react";
import { fetchProducts } from "../API/FetchData";
import ProductCard from "../design/ProductCard"
const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts("https://fakestoreapi.com/products");
      setProducts(data);
    };
    getData();
  }, []);

  

  return (
    <>
    <section className="py-10 my-20  bg-gray-100">

      <div id="popular" className="text-center my-16">
        <h1 className="text-4xl font-bold text-gray-800">All Items</h1>
      </div>

      <section className="flex flex-wrap items-center justify-center gap-10">
        {Products.slice(0, 20).map((item, index) => (
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
      
      </section>
    </>
  );
};

export default Products;
