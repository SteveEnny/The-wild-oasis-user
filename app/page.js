import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>The WIld Oasis. Welcome to pradasis</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
