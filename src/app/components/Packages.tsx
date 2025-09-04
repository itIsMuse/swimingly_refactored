export default function Packages() {
    return (
      <section id="packages" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Packages</h2>
          <p className="text-lg text-gray-700 mb-10">
            Choose the right package for your swimming journey. Each package is
            designed to give you flexibility, value, and the best instruction.
          </p>
  
          {/* Show the image for now */}
          <img
            src="/swimingly-price-list.jpg"
            alt="Swimingly price list"
            className="mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </section>
    );
  }
  