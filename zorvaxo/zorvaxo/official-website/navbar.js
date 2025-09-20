import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 border-2 rounded-full"></div>
        <span className="font-bold text-lg">UserName</span>
      </div>
      <div className="flex gap-4">
        <Link href="/"><button className="font-bold">🏠 HOME</button></Link>
        <Link href="/about"><button className="font-bold">ℹ️ ABOUT</button></Link>
        <Link href="/features"><button className="font-bold">🟢 FEATURES</button></Link>
      </div>
    </nav>
  );
}