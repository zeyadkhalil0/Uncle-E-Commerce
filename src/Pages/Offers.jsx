import React, { useEffect, useState } from "react";
import { fetchProducts } from "../API/FetchData";
import ProductCard from "../design/OffersCard";
const Offers = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProducts(
        "https://ylfxybktrtvtdjpubqvn.supabase.co/rest/v1/products?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZnh5Ymt0cnR2dGRqcHVicXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNjQxODksImV4cCI6MjA3MDc0MDE4OX0.vSsgxe1HBLSKG48er3n9Ru0F6tBFnJBNjGSh0DdRknU"
      );
      setProducts(data);
    };
    getData();
  }, []);

  

  return (
    <>
    <section className="py-10   bg-gray-200">

      <div id="popular" className="text-center my-16">
        <h1 className="md:text-4xl text-3xl font-bold text-gray-800">Hot Offers You Can't Miss</h1>
      </div>

      <section className="flex flex-wrap  items-center justify-center md:gap-10 gap-8">
        {Products.slice(6, 27).map((item, index) => (
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
    </section>
    </>
  );
};

export default React.memo(Offers);
