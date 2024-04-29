"use client";
import React, {useEffect} from "react";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {
  LucideProps,
  Star,
  ChevronLeft,
  ArrowRight,
  Plus,
  MoveUp,
  Cross,
} from "lucide-react";
import Background from "@/components/background";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {IncomingMessage} from "http";
import {BlazeLogo, FcLogo, MortyLogo} from "@/components/icons";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  delay,
} from "framer-motion";
import {useInView} from "react-intersection-observer";

const HomePage = () => {
  return (
    <>
      <LoadingScreen />
      <div className=" ">
        <Background />
        <div className="h-screen justify-between    flex flex-col ">
          <Navbar />
          <div className="rotate-[270deg] absolute left-0 top-[40%] -translate-y-1/2 ">
            <h1 className="text-xl font1">- Whitespace Media est. 2022 -</h1>
          </div>
          <div className="rotate-[90deg] absolute right-0 top-[40%] -translate-y-1/2 ">
            <h1 className="text-xl font1">- Speed - Insights - Seemless - </h1>
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

const LoadingScreen = () => {
  const [loadValue, setLoadValue] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadValue((loadValue) => {
        if (loadValue === 100) {
          clearInterval(interval);
          return 100;
        } else {
          return loadValue + 1;
        }
      });
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed h-screen w-screen bg-[#F1F4F7] top-0 left-0 z-50 loading-screen-animation">
      <div className="flex items-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Logo className="fill-primary h-10 mb-1" />
        <h1 className="text-4xl font1 ml-2">Whitespace Media</h1>
      </div>
      <div className="w-screen grid grid-cols-[1fr_150px]  bottom-0 absolute">
        <div className="w-full">
          <div className="w-[75%] h-full bg-gradient-to-r rounded-r-sm bg-black loading-screen-loader  " />
        </div>

        <span className="w-full items-center flex  justify-center text-[4rem]">
          {loadValue}
        </span>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="w-[100vw] relative overflow-hidden   h-[140px] -rotate-[0deg]">
      <div className="flex absolute left-0 gap-6 cred-carousel-animation top-1/2">
        {skills.map((skill, index) => (
          <h1
            key={index}
            className={`text-10xl whitespace-nowrap  font-bold
          ${index % 2 === 0 ? "normal" : "stroke"}
          
          `}
          >
            {skill}.
          </h1>
        ))}
      </div>
    </div>
  );
};

const skills = [
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
  "Content Marketing",
  "Short Form Video",
  "Social Media",
  "Brand awareness",
];

const Hero = () => {
  return (
    <div className="container z-30 relative  flex flex-col items-center gap-10   w-[700px]">
      <div className="flex flex-col items-center ">
        <h1 className="text-[6rem] leading-[6rem] bg-clip-text text-center text-transparent bg-gradient-to-l bg-black   py-2   font1">
          Organically grow
          <br /> your startup
        </h1>
        <p className="text-xl text-center w-full">
          We elevate your brand&apos;s social media presence with organic
          content that drives real impressions and builds lasting communities.
        </p>
        <div className="h-[180px] w-[180px] relative group  mt-4">
          <svg
            className=" bg-transparent hero-animate-spin group-hover:duration-1000 "
            viewBox="0 0 100 100"
            height={"180px"}
            width={"180px"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="circlePath"
              d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
              fill="none"
            />

            <text>
              <textPath href="#circlePath" className="text-[12px] font-bold">
                Book a call today ★ Book a call today ★
              </textPath>
            </text>
          </svg>

          <motion.button
            initial={{scale: 1, translateX: "-50%", translateY: "-50%"}}
            whileHover={{scale: 1.1, translateX: "-50%", translateY: "-50%"}}
            whileTap={{scale: 0.9}}
            className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 bg-black text-white font-bold uppercase flex items-center justify-center"
          >
            {" "}
            Book Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className="relative top-0 h-fit py-4 w-screen flex justify-between items-center px-8 bg-transparent">
      <Link className="flex items-center" href="/">
        <Logo className="fill-primary h-10 mb-1" />
        <h1 className="text-4xl font1 ml-2">Whitespace Media</h1>
      </Link>
      <div className="flex gap-8 ml-auto items-center">
        <Link href="/#stats" className=" capitalize">
          about
        </Link>
        <button className="text-primary capitalize">Our Work</button>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({variant: "outline"}),
            " capitalize rounded-2xl bg-primary text-background hover:bg-primary hover:text-background transition-colors duration-500"
          )}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

const LinesBackground = () => {
  return (
    <div className="h-screen fixed z-10 flex w-screen justify-between px-8">
      <div className="flex gap-8">
        <div className="h-full w-[1px] bg-border" />
        <div className="h-full w-[1px] bg-border" />
        <div className="h-full w-[1px] bg-border" />
        <div className="h-full w-[1px] bg-border" />
        <div className="h-full w-[1px] bg-border" />
        <div className="h-full w-[1px] bg-border" />
        <div className="h-full w-[1px] bg-border" />
      </div>
      <div className="h-full w-[1px] bg-border" />
    </div>
  );
};

function Logo({...props}: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 751 309"
    >
      <path d="M75.64.9c32.508 3.243 65.735 16.303 92.57 36.297 9.365 6.935 26.023 23.327 33.227 32.514 10.806 13.78 16.659 24.498 49.797 91.597 35.929 72.412 35.749 72.142 47.005 79.708 14.948 9.997 37.37 10.177 52.408.54 4.952-3.152 14.498-12.879 15.308-15.671.36-1.171-4.322-11.619-14.138-31.343a26565.335 26565.335 0 01-36.739-74.214c-12.067-24.498-30.346-61.335-40.522-81.96C264.291 17.833 256.096.721 256.276.45c.181-.27 16.569-.45 36.56-.27 38.721.18 44.484.63 64.925 5.404 36.469 8.376 71.498 30.172 96.801 60.254 14.228 16.842 15.849 19.905 70.598 130.865 14.047 28.551 15.668 31.343 20.981 37.017 9.725 10.268 20.351 14.771 34.668 14.861 16.479 0 31.157-7.295 39.982-19.994l2.431-3.513-15.308-30.983c-8.285-17.022-25.394-51.697-37.91-76.916C535.605 47.645 512.373.54 512.373.27c0-.09 53.669-.27 119.313-.27C697.331 0 751 .36 751 .72s-9.995 20.806-22.152 45.484c-12.246 24.678-27.735 56.201-34.578 70.071-62.403 127.172-64.475 130.865-83.565 149.689-49.526 48.906-129.399 57.101-189.191 19.364-13.867-8.826-33.137-26.749-41.422-38.728-2.161-3.062-4.052-5.584-4.142-5.584-.18 0-2.701 3.332-5.673 7.475-6.123 8.466-20.801 22.967-30.976 30.532-18.73 14.141-44.394 24.768-67.987 28.191-42.862 6.214-82.033-3.783-117.782-30.082-8.195-6.034-24.493-22.877-31.337-32.514-5.853-8.196-25.483-46.654-65.915-129.244-6.033-12.429-21.251-43.141-33.678-68.27C10.175 21.976 0 1.081 0 .63 0-.27 66.275 0 75.64.9z"></path>
      <path d="M75.64.9c32.508 3.243 65.735 16.303 92.57 36.297 9.365 6.935 26.023 23.327 33.227 32.514 10.806 13.78 16.659 24.498 49.797 91.597 35.929 72.412 35.749 72.142 47.005 79.708 14.948 9.997 37.37 10.177 52.408.54 4.952-3.152 14.498-12.879 15.308-15.671.36-1.171-4.322-11.619-14.138-31.343a26565.335 26565.335 0 01-36.739-74.214c-12.067-24.498-30.346-61.335-40.522-81.96C264.291 17.833 256.096.721 256.276.45c.181-.27 16.569-.45 36.56-.27 38.721.18 44.484.63 64.925 5.404 36.469 8.376 71.498 30.172 96.801 60.254 14.228 16.842 15.849 19.905 70.598 130.865 14.047 28.551 15.668 31.343 20.981 37.017 9.725 10.268 20.351 14.771 34.668 14.861 16.479 0 31.157-7.295 39.982-19.994l2.431-3.513-15.308-30.983c-8.285-17.022-25.394-51.697-37.91-76.916C535.605 47.645 512.373.54 512.373.27c0-.09 53.669-.27 119.313-.27C697.331 0 751 .36 751 .72s-9.995 20.806-22.152 45.484c-12.246 24.678-27.735 56.201-34.578 70.071-62.403 127.172-64.475 130.865-83.565 149.689-49.526 48.906-129.399 57.101-189.191 19.364-13.867-8.826-33.137-26.749-41.422-38.728-2.161-3.062-4.052-5.584-4.142-5.584-.18 0-2.701 3.332-5.673 7.475-6.123 8.466-20.801 22.967-30.976 30.532-18.73 14.141-44.394 24.768-67.987 28.191-42.862 6.214-82.033-3.783-117.782-30.082-8.195-6.034-24.493-22.877-31.337-32.514-5.853-8.196-25.483-46.654-65.915-129.244-6.033-12.429-21.251-43.141-33.678-68.27C10.175 21.976 0 1.081 0 .63 0-.27 66.275 0 75.64.9z"></path>
    </svg>
  );
}
const Stats = () => {
  const stats = [
    {
      title: "Impressions",
      value: 10000000,
      description:
        "We've generated millions of organic impressions across all platforms",
    },
    {
      title: "Leads Generated",
      value: 10000,
      description: "Our content is driving thousands of qualified leads week",
    },
    {
      title: "Followers",
      value: 250000,
      description:
        "We've grown the social following of our clients by tens of thousands",
    },
    {
      title: "new users",
      value: 5000,
      description:
        "Thousands of new customers signing up after watching one of our videos ",
    },
  ];

  return (
    <div id="stats" className="text-black container mt-20">
      <div className="grid grid-cols-4 gap-10 relative">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="w-full h-full "
            variants={{
              hidden: {y: 20, opacity: 0},

              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.2 * index,
                  duration: 0.5, // Duration of the animation for each item
                },
              },
            }}
            initial="hidden" // Start in the hidden state
            whileInView="visible" // Animate to the visible state when in view
            viewport={{once: true}} // Ensures animation only plays once
          >
            <div className="w-full rounded-lg p-4 flex items-start justify-between flex-col text-primary relative bg-white/40">
              <h1 className="text-3xl font-bold capitalize font1">
                {stat.title}
              </h1>
              <h2 className="text-sm font-bold ">{stat.description}</h2>
              <StatNumber value={stat.value} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const StatNumber = ({value}: {value: number}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const formatted = useTransform(rounded, (value) => value.toLocaleString());
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      animate(count, value, {
        duration: 3,
      });
    }
  }, [inView, value, count]); // Trigger animation on visibility change or value change

  return (
    <div className="flex items-start w-fit mt-4">
      <MoveUp className="h-6 w-8 text-primary " />
      <motion.h1 ref={ref} className="font1 text-5xl flex">
        {formatted}
      </motion.h1>
      <Plus className="h-8 w-8 text-primary fill-primary ml-2 mt-1" />
    </div>
  );
};

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = React.useState(0);

  useEffect(() => {
    // change testimonial every 4 seconds
    const interval = setInterval(() => {
      setSelectedTestimonial((selectedTestimonial) => {
        if (selectedTestimonial === testimonials.length - 1) {
          return 0;
        } else {
          return selectedTestimonial + 1;
        }
      });
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [selectedTestimonial]);

  return (
    <div className="relative w-screen h-[600px]">
      <div className="flex flex-col z-30 gap-10  items-center pb-20  pt-6 mt-20">
        <div className="flex gap-4">
          <Star className="h-12 w-12 fill-primary text-primary" />
          <Star className="h-12 w-12 fill-primary text-primary" />
          <Star className="h-12 w-12 fill-primary text-primary" />
          <Star className="h-12 w-12 fill-primary text-primary" />
          <Star className="h-12 w-12 fill-primary text-primary" />
        </div>
        <h1 className="text-[10rem] leading-[160px] font1 text-primary">
          Testimonials
        </h1>

        {/* <div className="grid grid-cols-2 container gap-10 mt-6"> */}
        {/* {testimonials.map((testimonial, index) => ( */}
        <motion.div
          animate={{
            x: ["100%", "10%", "-10%", "-120%"],
            // filter: ["blur(2px)", "blur(0px)", "blur(0px)", "blur(2px)"],
          }}
          transition={{duration: 3.5, times: [0, 0.1, 0.9, 1]}}
          key={testimonials[selectedTestimonial].text}
          className={`h-fit w-[800px] bg-white/40  atestimonial-animation blurBack rounded-2xl text-2xl p-8 flex flex-col`}
        >
          <p className="font-bold">{testimonials[selectedTestimonial].text}</p>
          <div className="flex gap-2 items-center mt-6">
            <div className="h-10 w-10 relative rounded-full bg-card overflow-hidden">
              {testimonials[selectedTestimonial].logo}
            </div>
            <div className=" w-fit ">
              {testimonials[selectedTestimonial].creator}
            </div>
          </div>
        </motion.div>
        {/* ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "that red bull video was fire!! Literally just got done sending the videos to the entire company during our all hands. GREAT week guys!",
    creator: "-Matt Blaze AI ",
    logo: <BlazeLogo className="h-10 w-10" />,
  },
  {
    text: "Thanks for being so on top of stuff. It's always nice working with professionals!",
    creator: "-Andy Morty App",
    logo: <MortyLogo className="h-10 w-10" />,
  },
  {
    text: " The accounts are growing fast, loving the content. keep doing your thing",
    creator: "-Founder Central",
    logo: <FcLogo className="h-10 w-10" />,
  },
];

function Faq() {
  const questions = [
    {
      q: "Who is this for?",
      a: "Our services are designed for brands and businesses looking to elevate their presence on social media through engaging short-form videos. Whether you're a startup aiming to establish your brand identity, an established company seeking to connect with a younger audience, or anyone in between, our expertise in crafting attention-grabbing content can help drive sustainable brand awareness for your organization. We cater to those who understand the power of social media and are ready to leverage it to its fullest potential.",
    },
    {
      q: "Why should  I need to invest in short form content?",
      a: "Investing in short-form content is essential for capturing attention in today's fast-paced digital landscape. Its concise format boosts engagement, particularly on mobile platforms, and maximizes brand visibility across various social media channels. With its cost-effectiveness and adaptability, short-form content offers a powerful means to drive brand awareness and connect with your audience effectively.",
    },
    {
      q: "Why choose Whitespace Media?",
      a: "Our young, dynamic team understands the pulse of the new generation, delivering content tailored to engage and resonate with today's audiences. Whether extracting clips from long-form content or creating original, attention-grabbing videos, we're committed to helping your brand stand out in the digital sphere.",
    },
    {
      q: "What can I expect from you guys?",
      a: "We'll deliver 20 engaging posts monthly, handle comment replies, and curate captivating story content. Our systematic approach ensures efficiency at every step, from content creation to scheduling and engagement monitoring. This streamlined processes guarantee a seamless experience, allowing you to focus on other aspects of your business while we elevate your brand's online presence. ",
    },
  ];

  return (
    <div className="flex flex-col relative container items-center my-20 bg-white/40 blurBack rounded-xl w-[80%] p-10">
      <h1 className="text-[10rem] leading-[160px] font1 text-primary">FAQ</h1>
      <Accordion type="single" collapsible className="w-[90%] ">
        {questions.map((question, index) => (
          <AccordionItem key={index} value={question.q}>
            <AccordionTrigger className="font-bold text-2xl">
              {question.q}
            </AccordionTrigger>
            <AccordionContent className=" text-2xl">
              {question.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

const Process = () => {
  return (
    <div className="bg-white/40 ml-auto blurBack right-0   h-fit w-[80%] rounded-l-xl mt-20  text-black py-10 ">
      <div className="container  p-8 px-16 flex flex-col">
        <motion.h1
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.3}}
          className="font1 text-6xl  "
        >
          Starting with a new team can be daunting, <br /> but we make it easy.
        </motion.h1>
        <div className="flex flex-col mt-10 ">
          <motion.div
            initial={{opacity: 0, y: 200}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.3}}
            className="gap-8 flex flex-col"
          >
            <div className="w-full h-[1px] bg-black/20"></div>
            <div className="flex gap-10 justify-between items-center px-6 h-[100px]">
              <span className="font1 text-4xl">01</span>
              <span className="font-bold text-2xl">Onboarding</span>
              <span className="max-w-[50%]">
                After studying your brand, we come up with multiple series to
                run, draw up a content calendar for the whole month. Then jump
                on a call to discuss our plan and then only will you sign up.
              </span>
            </div>
            <div className="w-full h-[1px] bg-black/20"></div>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 200}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.3}}
            className="gap-8 flex flex-col"
          >
            <div className="flex gap-10 justify-between items-center px-6 h-[100px] mt-8">
              <span className="font1 text-4xl">02</span>
              <span className="font-bold text-2xl">Executing</span>
              <span className="max-w-[50%]">
                Don&apos;t worry about the posting We take social media
                completely off your hands by fully manage the video production,
                posting and community engagement.
              </span>
            </div>
            <div className="w-full h-[1px] bg-black/20"></div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 200}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.3}}
            className="gap-8 flex flex-col"
          >
            <div className="flex gap-10 justify-between items-center px-6 h-[100px] mt-8">
              <span className="font1 text-4xl">03</span>
              <span className="font-bold text-2xl">Reporting</span>
              <span className="max-w-[50%]">
                We send weekly performance reports to keep you in the loop. And
                at the end of every month, we will schedule a call to go over
                last months performance and discuss any adjustments
              </span>
            </div>
            <div className="w-full h-[1px] bg-black/20"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="container relative">
      <Link
        href="/contact"
        className="relative w-[90%] mx-auto rounded-full h-[400px] flex items-center justify-center text-8xl font1 mb-20 font-bold hover:bg-[#181818] bg-black/10 blurBack hover:text-background transition-colors duration-500 group"
      >
        Let&apos;s get Started
        <ArrowRight className="h-16 w-16 ml-4 group-hover:translate-x-[50px] transition-transform duration-500" />
      </Link>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="w-full h-fit bg-primary relative p-2 pt-6 flex flex-col gap-3 items-center">
      <div className="flex items-center mx-auto">
        <Logo className="fill-white h-10 mb-1" />
        <h1 className="text-4xl text-white font1 ml-2">Whitespace Media</h1>
      </div>
      <h1 className="text-white/60">
        © 2024 Whitespace Media. All rights reserved.
      </h1>
    </div>
  );
};
