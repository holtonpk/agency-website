import Background from "@/components/background";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {ContactForm} from "./contact-form";
import {constructMetadata} from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Contact - Whitespace Media",
  description: "We specialize in organic marketing",
  image: "image/logo.ico",
});

const ContactPage = () => {
  return (
    <>
      <Background />
      <div className="h-screen     flex flex-col ">
        <Navbar />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
