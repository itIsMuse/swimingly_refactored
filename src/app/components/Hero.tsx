import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 bg-[#00102e]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left side text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
            Welcome to Swimingly Swimming School
          </h1>
          
          <a
            href="https://forms.gle/asC2oMcouaSeQavMA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#084f70] hover:bg-[#04344b]  transition duration-500  text-white font-semibold px-6 py-3 rounded-lg shadow "
          >
            Get Started
          </a>
        </div>

        {/* Right side image */}
        <div className="flex justify-center">
          <Image
            src="/Screenshot_20211012-192455.png"
            alt="Swimming class"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
