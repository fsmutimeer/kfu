const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Welcome to KFU Guest House
            </h2>
            <p className="mb-4">
              Nestled in the picturesque Kalash Valley of Bumburat, Chitral, our
              guest house offers a unique blend of comfort and natural beauty.
            </p>
            <p className="mb-4">
              Whether you&#39;re looking for a peaceful retreat, a base for
              exploring the rich Kalash culture, or an adventure in the
              mountains, KFU Guest House & River Touch Camping Site is your
              ideal destination in Khyber Pakhtunkhwa.
            </p>
            <p>
              Our facilities include comfortable rooms, riverside camping sites,
              traditional Kalash cuisine, and guided tours to local attractions.
            </p>
          </div>
          <div
            className="md:w-1/2 h-96 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/scene.jpg')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
