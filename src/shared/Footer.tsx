import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Sports Genius Hub</h3>
            <p className="text-sm mb-4">
              Sports Genius Hub is dedicated to bringing out the best in
              athletes and fostering a community of excellence.
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} SportsGeniusHub.com
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-lime-300 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-lime-300 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-lime-300 hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-lime-300 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-lime-300 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-lime-300 hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-lime-300 hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">123 Sports Avenue</p>
            <p className="text-sm mb-2">FaridpurCity, State 12345</p>
            <p className="text-sm">Phone: (+880) 1954500994</p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 pt-6 text-sm text-center">
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
