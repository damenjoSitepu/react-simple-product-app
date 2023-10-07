import { useState } from "react";
import Button from "./utils/Button";
import Input from "./utils/Input";

export default function CreateProduct({ handleCreateProduct }) {
  const [name, setName] = useState('');

  function handleSubmitProduct() {
    handleCreateProduct({ name });
    setName('');
  }

  function handleProductNameChanged(e) {
    setName(e.target.value);
  }

  return (
    <div className="w-1/4 px-4">
      <h1 className="py-3 text-center">Create Product</h1>
      <hr />
      <Input handleChange={handleProductNameChanged} label='Name' value={name} />
      <Button label='Create' handleSubmit={handleSubmitProduct}/>
    </div>
  )
}