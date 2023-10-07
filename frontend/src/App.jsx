import { useState } from 'react'
import './App.css'
import CreateProduct from './components/CreateProduct'
import Header from './components/Header'
import Product from './components/Product'

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pencil",
      prices: [
        {
          id: 1, 
          nominal: 30000,
          isSelected: true,
        }
      ],
    },
    {
      id: 2,
      name: "Table",
      prices: [
        {
          id: 1, 
          nominal: 25000,
          isSelected: true,
        }
      ],
    },
    {
      id: 3,
      name: "Fan",
      prices: [
        {
          id: 1, 
          nominal: 35000,
          isSelected: true,
        }
      ],
    }
  ]);

  function handleCreateProduct({ name }) {
    if (!name.trim()) return;
    setProducts([...products, {
      id: products.length + 1,
      name,
      prices: [],
    }]);
  }

  function handleDeleteProduct({ idx }) {
    if (products.length === 0 || idx < 0) return;
    setProducts(products.filter((_, productIdx) => productIdx !== idx));
  }

  function handleToAddNewPrice({ idx, price }) {
    if (idx < 0 || !price && products.length > 0) return;
    const updatedProduct = products.find((_, productIdx) => productIdx === idx);
    if (updatedProduct.prices.find((originPrice) => originPrice.nominal == price)) return;
    if (!updatedProduct) return;
    updatedProduct.prices.push({
      id: updatedProduct.prices.length + 1,
      nominal: price,
      isSelected: false,
    });
    setProducts(products.map((product, productIdx) => productIdx !== idx ? product : updatedProduct));
  }

  return (
    <>
      <Header />
      <div className='flex flex-wrap my-4'>
        <CreateProduct handleCreateProduct={handleCreateProduct}/>
        <Product products={products} handleToAddNewPrice={handleToAddNewPrice} handleDeleteProduct={handleDeleteProduct}/>
      </div>
    </>
  )
}

export default App
