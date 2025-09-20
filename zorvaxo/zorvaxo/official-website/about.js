import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 text-black p-10">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="max-w-xl text-center">
          Hello! I am Suraj, creator of this official website. Here you can find
          information about my projects, services, and updates. Stay connected!
        </p>
      </main>
      <Footer />
    </div>
  );
}