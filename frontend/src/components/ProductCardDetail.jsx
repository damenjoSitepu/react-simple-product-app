export default function ProductCardDetail({ label, value }) {
  return (
    <div className="flex flex-wrap justify-between px-3 my-3">
      <p className="w-2/6">{label}</p>
      <p className="w-1/6">:</p>
      <p className="w-3/6 text-end">{value}</p>
    </div>
  );
}