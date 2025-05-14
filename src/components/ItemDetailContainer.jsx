import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const products = [
  { id: '1', name: 'Auto eléctrico', category: 'vehiculos', description: 'Un auto eléctrico moderno.' },
  { id: '2', name: 'Bicicleta', category: 'vehiculos', description: 'Bicicleta de montaña resistente.' },
  { id: '3', name: 'Smartphone', category: 'electronica', description: 'Smartphone de última generación.' },
  { id: '4', name: 'Laptop', category: 'electronica', description: 'Laptop potente para profesionales.' },
];


const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 500);
  });
};

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(data => {
      setProduct(data);
    });
  }, [itemId]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Categoría: {product.category}</p>
      <p>Descripción: {product.description}</p>
    </div>
  );
}

export default ItemDetailContainer;
