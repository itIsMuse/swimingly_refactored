const classes = [
    {
      title: "Adult Classes",
      description:
        "It is never too late to learn how to swim! Our adult swimming classes are designed to teach individuals of any skill level how to swim or improve their technique. Our experienced instructors work with each participant to create a personalized plan that suits their needs and goals. Swimming provides a great low-impact workout, improves flexibility, and decreases stress levels.",
    },
    {
      title: "Child Classes (ages 6 and above)",
      description:
        "Enrolling your child in swimming classes improves their safety around water and builds confidence. Our child swimming classes teach the fundamentals of swimming, including technique, breathing, and safety. With certified instructors, learning is engaging and fun while promoting physical activity and social interaction.",
    },
    {
      title: "Infant and Toddler Classes",
      description:
        "Swimming is an essential life skill. We offer infant swimming classes for children as young as six months old. Babies are introduced to water in a safe, nurturing environment using gentle techniques. They learn to float, kick, and gain water confidence. This program promotes safety, develops motor skills, and encourages bonding between parent and child.",
    },
  ];
  
  export default function Classes() {
    return (
      <section id="classes" className="py-16 transparent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Classes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {classes.map((cls, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4">{cls.title}</h3>
                <p className="text-gray-700 leading-relaxed">{cls.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  