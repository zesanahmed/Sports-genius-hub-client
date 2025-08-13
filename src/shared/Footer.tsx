import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-base-content text-white py-10 px-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-4 uppercase">
              Sports Genius Hub
            </h3>
            <p className="text-md mb-4 font-sans">
              Sports Genius Hub is dedicated to bringing out the best in
              athletes and fostering a community of excellence.
            </p>
            <p className="text-md font-sans">
              © {new Date().getFullYear()} SportsGeniusHub.com
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-lg font-sans">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2 text-lg font-sans">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
            <div className="text-lg mb-2 font-sans">
              <p>123 Sports Avenue</p>
              <p>Faridpur City, State 12345</p>
              <p>Phone: (+880) 1954500994</p>
              <p className="underline">zesanahmed69@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 pt-6 text-lg text-center font-sans">
          <p>
            &copy; {new Date().getFullYear()} Sports Genius Hub. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
