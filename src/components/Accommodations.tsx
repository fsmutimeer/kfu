const Accommodations = () => {
  const accommodations = [
    {
      title: "Standard Room",
      description:
        "Comfortable room with essential amenities, mountain views, and traditional décor.",
      //   price: "From PKR 3,500/night",
    },
    {
      title: "Deluxe Room",
      description:
        "Spacious room with premium furnishings, private balcony, and enhanced amenities.",
      //   price: "From PKR 5,000/night",
    },
    {
      title: "Riverside Camping",
      description:
        "Set up your tent by the river or rent one of ours, with access to shared facilities.",
      //   price: "From PKR 1,500/night",
    },
  ];

  return (
    <section
      id="accommodations"
      className="py-20"
      style={{ backgroundImage: "url('/scene.jpg')" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Accommodation Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accommodations.map((acc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: "url('/scene.jpg')" }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  {acc.title}
                </h3>
                <p className="mb-4 text-green-800">{acc.description}</p>
                {/* <p className="text-green-600 font-bold mb-4">{acc.price}</p> */}
                <a
                  href="#contact"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
