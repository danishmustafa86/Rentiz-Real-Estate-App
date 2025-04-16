import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../../components/productCard'


export default function Products() {
  const [products, setProducts] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data);
      setProducts(response.data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    console.log("useEffect triggered");
    getProducts();
  }, []);

  return (
    <div style={{ color: "wheat" }}>
      <h1>Products are here.</h1>
      <div className="product_data" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.slice(0,loadMoreCount).map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
      <button onClick={() => {setLoadMoreCount(loadMoreCount + 5)}} style={{color:"White", background:"red"}}> Load More</button>
    </div>
  );
}
