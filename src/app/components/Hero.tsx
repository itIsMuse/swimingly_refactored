import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left side text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Welcome to Swimingly Swimming School
          </h1>
          <p className="text-lg text-gray-700">
            Welcome to the official site of Swimingly Swimming School. <br />
            A school where we teach the best swimming techniques to people of
            all ages.
          </p>
          <a
            href="https://forms.gle/asC2oMcouaSeQavMA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
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
