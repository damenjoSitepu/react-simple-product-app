import ProductCard from "./ProductCard";

export default function Product({ products, handleDeleteProduct, handleToAddNewPrice }) {
  return (
    <div className="w-3/4 flex flex-wrap gap-4 justify-evenly">
      {products.length > 0 && products.map((product, idx) => (
        <ProductCard
          key={product.id}
          idx={idx}
          product={product}
          handleDeleteProduct={handleDeleteProduct}
          handleToAddNewPrice={handleToAddNewPrice}
        />
      ))}
    </div>
  );
}