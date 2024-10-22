// import ReservationCard from "../../_components/ReservationCard";

// export default function Page() {
//   // CHANGE
//   const bookings = [];

//   return (
//     <div>
//       <h2 className="font-semibold text-2xl text-accent-400 mb-7">
//         Your reservations
//       </h2>

//       {bookings.length === 0 ? (
//         <p className="text-lg">
//           You have no reservations yet. Check out our{" "}
//           <a className="underline text-accent-500" href="/cabins">
//             luxury cabins &rarr;
//           </a>
//         </p>
//       ) : (
//         <ul className="space-y-6">
//           {bookings.map((booking) => (
//             <ReservationCard booking={booking} key={booking.id} />
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import Image from "next/image";

import DataCard from "~/components/common/DataCard";
// import DataCard from "~/components/common/DataCard";
// // import DataCard from "~/components/common/DataCard";
import Paginations from "~/components/common/Pagination";
import TableData from "~/components/common/Table";
import { Button } from "~/components/ui/button";

// import filter from "../../public/filter.svg"

export default function Page() {
  return (
    <main className="">
      <div className="mb-[28px] flex gap-4">
        <DataCard />
        <DataCard />
        <DataCard />
      </div>
      <div className="mb-10 flex items-center justify-between">
        <div className="">
          <h2 className="text-[28px] font-semibold text-black">Products</h2>
          <p className="text-xs font-normal">
            Manage your products and view their sales performance.
          </p>
        </div>
        <div className="flex gap-[10px]">
          <Button className="flex items-center gap-[10px] rounded border-[.5px] border-stroke-300 text-base font-normal text-natural-200">
            <Image src="/filter.svg" width={20} height={20} alt="" />
            <span>Filter</span>
          </Button>
          <Button className="flex items-center gap-2 rounded bg-acent-400 text-white">
            <Image src="/add.svg" width={16} height={16} alt="" />
            <span>Add Product</span>
          </Button>
        </div>
      </div>
      <TableData />

      <Paginations />
    </main>
  );
}
