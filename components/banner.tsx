import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  imageUrl: string;
  heading?: string;
  paragraph: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function Banner({
  imageUrl,
  heading,
  paragraph,
  buttonText,
  buttonLink,
}: BannerProps) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="Banner background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center px-4 py-24 min-h-screen">
        <div className="text-white space-y-6">
          <h1 className="text-3xl font-bold">
            {(heading || "").split("\n").map((line, index) => (
              <span key={index} className={index > 0 ? "block mt-2" : ""}>
                {line}
              </span>
            ))}
          </h1>
          <p className="text-xl opacity-90">{paragraph}</p>
          {buttonText && buttonLink && (
            <Link
              href={buttonLink}
              className="inline-block px-8 py-3 bg-[#B7E4A7] text-black font-bold rounded-md hover:bg-[#a5d695] transition-colors"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
