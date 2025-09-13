import { Helmet } from "react-helmet-async";
import ContactBanner from "./ContactBanner";
import ContactSection from "./ContactSection";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Sports | Contact</title>
      </Helmet>
      <ContactSection />
    </div>
  );
};

export default Contact;
