const Contact = () => {
  // Google Maps Embed API URL with the pinned location
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318049.17972704!2d67.19581604003905!3d35.69466760202847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db452962758797%3A0x3ecd2e2b1f2beef2!2sKFU%20Guest%20House%20%26%20River%20Touched%20Camping%20Site!5e0!3m2!1sen!2s!4v1742061156407!5m2!1sen!2s";

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
          Contact & Booking
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/2">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-2">Address</h3>
              <p>KFU Guest House & River Touch Camping Site</p>
              <p>Kalash Bumburat, Chitral</p>
              <p>Khyber Pakhtunkhwa, Pakistan</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-2">Phone</h3>
              <p>+92 342 1919617</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Email</h3>
              <p>bandarafayaz@gmail.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="md:w-1/2">
            <iframe
              src={mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
