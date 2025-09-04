export default function About() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to Swimingly</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Welcome to our swimming school! We believe that learning to swim is
                an essential life skill that everyone should have. Our team of
                experienced instructors are dedicated to providing a safe, fun, and
                supportive environment where swimmers of all ages and abilities can
                learn and grow.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                We offer a variety of lessons and programs, including group and
                private lessons, for both children and adults. With our focus on
                individualized attention and progress tracking, we are confident
                that we can help you or your child reach your swimming goals.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                Choose us for expert instruction, personalized attention, and a
                lifelong love of swimming.
              </p>
            </div>
            <div>
              {/* later you can put an image or video here */}
              <img
                src="/swimming-school.jpg"
                alt="Swimming lessons"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  