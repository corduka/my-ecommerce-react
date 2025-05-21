import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const productsData = [
  { id: "1", name: "Auto eléctrico", category: "vehiculos", price: 10000 },
  { id: "2", name: "Bicicleta", category: "vehiculos", price: 500 },
  { id: "3", name: "Smartphone", category: "electronica", price: 800 },
  { id: "4", name: "Laptop", category: "electronica", price: 1200 },
];

const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData.find((p) => p.id === id));
    }, 500);
  });
};

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then((data) => {
      setProduct(data);
    });
  }, [itemId]);

  return <div>{product && <ItemDetail product={product} />}</div>;
};

export default ItemDetailContainer;
