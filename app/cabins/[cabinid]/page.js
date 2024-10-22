import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lb/data-service";
import { Suspense } from "react";

// PLACEHOLDER DATA
// const cabin = {
//   id: 89,
//   name: "001",
//   maxCapacity: 2,
//   regularPrice: 250,
//   discount: 0,
//   description:
//     "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
//   image:
//     "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
// };

// export const metadata = {
//   title:
// }

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinid);
  return { title: `Cabin ${name}` };
}

//telling next js of arhead time which params exits
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinid: String(cabin.id),
  }));
  return ids;
}

export default async function Page({ params }) {
  ///Fetching datas
  const cabin = await getCabin(params.cabinid);
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinid);  //
  /// The above meto slows own the application

  // const [] = Promise.all([
  //   getCabin(params.cabinid),
  //   getSettings(),
  //   getBookedDatesByCabinId(params.cabinid),
  // ]);
  // This also is better but still slos down the application.

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation params={params} cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
