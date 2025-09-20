import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-green-200 text-black p-10">
        <h1 className="text-3xl font-bold mb-6">Features</h1>
        <ul className="list-disc space-y-2 max-w-xl text-left">
          <li>✅ User-friendly Interface</li>
          <li>✅ Fast and Responsive</li>
          <li>✅ Telegram Channel Integration</li>
          <li>✅ Mobile and Desktop Friendly</li>
          <li>✅ Easy Navigation</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}