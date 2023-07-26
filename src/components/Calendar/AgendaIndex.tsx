export default function AgendaIndex() {
  return (
    <div className="grid grid-cols-12 items-center text-sm font-bold px-2 py-2 mb-2 bg-gray-50">
      <p className="col-start-2 col-span-1 ">Date</p>
      <p className="col-start-4 col-span-3">Service</p>
      <p className="col-start-7 col-span-3">Equipment</p>
      <p className="col-start-10 col-span-1">Location</p>
    </div>
  );
}
