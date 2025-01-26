const Testimonials = () => {
  const testimonials = [
    {
      quote: "Chance and his team are extremely professional and there work is top notch! I highly recommend them! They will go above and beyond for you!",
      author: "Lindsey Nickel",
      role: "Client"
    },
    {
      quote: "Chance Hyser with H3 Excavation & Construction recently worked on the utility trench for our home. He was great to work with and a good communicator. He has lots of experience in the field and was able to provide good advice to solve some of our complex issues. Best of all, he was reliable, showed up when he said he would, and did great work. We were very pleased.",
      author: "Jill Elaine",
      role: "Client"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105"
            >
              <div className="mb-4">
                <svg
                  className="h-8 w-8 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">
                  {testimonial.author}
                </h4>
                <span className="text-gray-500">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;