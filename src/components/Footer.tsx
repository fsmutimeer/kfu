const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {year} KFU Guest House & River Touch Camping Site. All rights
          reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=100093843692851"
            target="_blank"
            className="mx-2 hover:text-green-300"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
