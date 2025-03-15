const Features = () => {
  const features = [
    {
      title: "Riverside Location",
      description:
        "Enjoy the unique experience of staying right beside the flowing river, with the soothing sounds of water creating a peaceful atmosphere.",
    },
    {
      title: "Kalash Culture",
      description:
        "Immerse yourself in the rich culture of the indigenous Kalash people, known for their unique traditions and colorful festivals.",
    },
    {
      title: "Mountain Views",
      description:
        "Wake up to breathtaking views of the Hindu Kush mountains surrounding the beautiful Bumburat valley.",
    },
    {
      title: "Local Cuisine",
      description:
        "Taste authentic regional dishes prepared with fresh local ingredients, offering a true culinary experience of the region.",
    },
  ];

  return (
    <section id="features" className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold text-green-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-green-800 mb-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
