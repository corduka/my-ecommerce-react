import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: '1', name: 'Auto eléctrico', category: 'vehiculos' },
  { id: '2', name: 'Bicicleta', category: 'vehiculos' },
  { id: '3', name: 'Smartphone', category: 'electronica' },
  { id: '4', name: 'Laptop', category: 'electronica' },
];

const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter(p => p.category === categoryId));
      } else {
        resolve(products);
      }
    }, 500);
  });
};

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts(categoryId).then(data => {
      setItems(data);
    });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{categoryId ? `Showing products in category: ${categoryId}` : 'Showing all products'}</p>

        <ul>
          {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
          ))}
        </ul>
    </div>
  );
}

export default ItemListContainer;
