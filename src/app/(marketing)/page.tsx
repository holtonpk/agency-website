import Background from "@/components/background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingScreen from "@/app/(marketing)/components/loading-screen";
import {Hero, Banner} from "@/app/(marketing)/components/hero";
import {Stats} from "@/app/(marketing)/components/stats";
import {Testimonials} from "@/app/(marketing)/components/testimonials";
import {Faq} from "@/app/(marketing)/components/faq";
import {Process} from "@/app/(marketing)/components/process";
import {ContactUs} from "@/app/(marketing)/components/contact";
import {constructMetadata} from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Whitespace Media",
  description: "We specialize in organic marketing",
  image: "image/logo.ico",
});
const HomePage = () => {
  return (
    <>
      <LoadingScreen />
      <div className=" ">
        <Background />
        <div className="md:h-screen justify-between  min-w-screen   flex flex-col ">
          <Navbar />
          <div className="rotate-[270deg] absolute -left-16 md:left-0 top-[30%] md:top-[40%] -translate-y-1/2 ">
            <h1 className="text-md md:text-xl font1">
              - Whitespace Media est. 2022 -
            </h1>
          </div>
          <div className="rotate-[90deg] absolute -right-16 md:right-0 top-[30%] md:top-[40%] -translate-y-1/2 ">
            <h1 className="text-md md:text-xl font1">
              - Speed - Insights - Seemless -{" "}
            </h1>
          </div>
          <Hero />
          <Banner />
        </div>
        <Stats />

        <Process />

        <Testimonials />
        <Faq />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
