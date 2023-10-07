export default function Input({ label, value, handleChange }) {
  return (
    <div className="my-3">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >{label}</label>
      <input
        type="text"
        onChange={handleChange}
        id={label}
        name={label}
        value={value}
        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none w-full"
      />
    </div>
  );
}