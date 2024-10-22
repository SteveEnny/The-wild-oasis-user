import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import "./_styles/globals.css";
import { ReservationProvider } from "./_components/ResevatonContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// console.log(josefin);

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "welcome /The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
