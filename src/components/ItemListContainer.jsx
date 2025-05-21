import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const productsData = [
  { id: "1", name: "Auto eléctrico", category: "vehiculos", price: 10000 },
  { id: "2", name: "Bicicleta", category: "vehiculos", price: 500 },
  { id: "3", name: "Smartphone", category: "electronica", price: 800 },
  { id: "4", name: "Laptop", category: "electronica", price: 1200 },
];

const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(productsData.filter((p) => p.category === categoryId));
      } else {
        resolve(productsData);
      }
    }, 500);
  });
};

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(categoryId).then((data) => {
      setProducts(data);
    });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
