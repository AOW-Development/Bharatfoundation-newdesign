import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home_banner.png"
          alt="Sports stadium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 p-12 mt-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-3xl font-bold">
              Welcome to
              <span className="block mt-2">Bharat Sports Foundation</span>
            </h1>
            <p className="text-xl opacity-90">
              Your ultimate destination for everything related to physical
              education and sports
            </p>
            <Link
              href="/donate"
              className="inline-block px-8 py-3 bg-[#16A34A] text-black font-bold rounded-md hover:bg-[#a5d695] transition-colors"
            >
              DONATE HERE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
