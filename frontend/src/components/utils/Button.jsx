export default function Button({ label, handleSubmit }) {
  return (
    <button
      onClick={handleSubmit}
      className='bg-blue-500 text-center hover:bg-blue-600 text-white font-semibold h-12 px-4 w-full rounded'
    >
      {label}
    </button>
  );
}