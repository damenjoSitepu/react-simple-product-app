import { useState } from "react";
import ProductCardDetail from "./ProductCardDetail";
import Button from "./utils/Button";

export default function ProductCard({ product, idx, handleDeleteProduct, handleToAddNewPrice }) {
  const [price, setPrice] = useState(0);

  function handleSubmitToDeleteProduct() {
    handleDeleteProduct({idx});
  }

  function handleSubmitToAddNewPrice() {
    handleToAddNewPrice({ idx, price });
    setPrice(0);
  }

  return (
    <>
      <div className="shadow-md flex-none h-fit" style={{ width: 'calc(33.333% - 2rem)' }}>
        <h1 className="text-center my-3">{product.name}</h1>
        <hr className="my-3" />
        {
          (product.prices && product.prices.length === 0)  && (
            <p className="px-4"> Prices not available!</p>
          )
        }
        {
          (product.prices && product.prices.length > 0) && product.prices.map((price, idx) => (
            <ProductCardDetail key={idx} label={'Price (' + (idx + 1) + ')'} value={price.nominal} />
          ))
        }
        <hr className="my-3" />

        {/* Add New Prices */}
        <div className="flex flex-wrap items-center my-3 gap-x-3"> 
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
          />
          <div style={{ width: "calc(50% - 3rem)" }}>
            <Button label='New Price' handleSubmit={handleSubmitToAddNewPrice}/>
          </div>
        </div>

        <Button label='Delete' handleSubmit={handleSubmitToDeleteProduct}/>
      </div>
    </>
  );
}