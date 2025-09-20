import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-blue-400 text-white text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">WELCOME TO SURAJ OFFICIAL WEBSITE</h1>
          <h2 className="text-2xl font-bold">JOIN MY TELEGRAM CHANNEL</h2>
          <p className="text-xl">@SURAJ_OFFICIAL_1</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}