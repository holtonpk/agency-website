"use client";
import React, {useEffect} from "react";
import {Button} from "@/components/ui/button";
import {LucideProps, Star, ChevronLeft, ArrowRight} from "lucide-react";
import Background from "@/components/background";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {IncomingMessage} from "http";
const HomePage = () => {
  return (
    <>
      <div className="bg-[#181818]  ">
        <Navbar />
        <Background />
        <div className="h-screen rounded-b-[30px] bg-background">
          <Hero />
          <Stats />
        </div>
        <Testimonials />
        <FAQ />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

const Hero = () => {
  const skills = [
    "Content Marketing",
    "Short Form Video",
    "Social Media",
    "Brand awareness",
  ];

  const [newSkill, setNewSkill] = React.useState(0);
  const [oldSkill, setOldSkill] = React.useState(-1);

  useEffect(() => {
    const newSkillInterval = setInterval(() => {
      setNewSkill((newSkill) => {
        if (newSkill === skills.length - 1) {
          return 0;
        } else {
          return newSkill + 1;
        }
      });
    }, 3000);

    const oldSkillInterval = setInterval(() => {
      setOldSkill((oldSkill) => {
        if (oldSkill === skills.length - 1) {
          return 0;
        } else {
          return oldSkill + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(newSkillInterval);
      clearInterval(oldSkillInterval);
    };
  }, [skills.length]);

  return (
    <div className="container z-30 relative pt-28 flex flex-col items-center gap-10">
      <div className="flex gap-28 items-center">
        <div className="flex flex-col items-left w-[715px]">
          <h1 className="text-[8rem] leading-[8rem] bg-clip-text text-transparent bg-black   py-2   font1">
            We&apos;ve mastered
          </h1>
          <div className="flex w-full items-center relative overflow-hidden h-[5.75rem] ">
            <h1
              key={newSkill + 1}
              className="text-[7rem] newSkill-animation leading-[5.75rem] absolute text-primary  font1 w-fit whitespace-nowrap"
            >
              {skills[newSkill]}
            </h1>
            <h1
              key={oldSkill + 1}
              className="text-[7rem] oldSkill-animation leading-[5.75rem] absolute text-primary  font1 w-fit whitespace-nowrap"
            >
              {skills[oldSkill]}
            </h1>
          </div>
        </div>

        <div className="flex flex-col w-[500px]">
          <p className="text-xl font-bold">
            Elevate your brand&apos;s social media presence with viral-worthy
            organic content that drives real impressions and builds community.
            <br />
            <br />
            We&apos;ve generated millions of impressions for our clients using a
            formula perfected over a decade of experimentation with social
            content.
          </p>
        </div>
      </div>
      {/* <Logo className="fill-primary h-60" /> */}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="fixed top-0 h-20 z-40 bg-background/40 blurBack w-screen flex justify-between items-center px-8 ">
      <Logo className="fill-primary h-10 mb-1" />
      <h1 className="text-4xl font1 ml-4">Whitespace Media</h1>
      <div className="flex gap-8 ml-auto items-center">
        <button className=" capitalize">about</button>
        <button className="text-primary capitalize">Our Work</button>
        <button className="text-primary capitalize">Contact</button>
        <Button
          variant={"outline"}
          className=" capitalize rounded-2xl bg-[#00e3ffeb]"
        >
          Contact
        </Button>
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
      value: "40.2M +",
      description: "We've generated impressions accross all platforms",
    },
    {
      title: "Views",
      value: "234.2M +",
      description: "We've generated impressions accross all platforms",
    },
    {
      title: "Leads Generated",
      value: "50k +",
      description: "We've generated impressions accross all platforms",
    },
    {
      title: "Followers",
      value: "2.2M +",
      description: "We've generated impressions accross all platforms",
    },
    {
      title: "new users",
      value: "50k +",
      description: "We've generated impressions accross all platforms",
    },
  ];

  return (
    <div
      id="stat-container"
      className="w-screen relative z-20 container  my-28  justify-center gap-4 grid grid-cols-5"
    >
      {/* <div className="cyan-blob"></div> */}
      {/* <div className="blue-blob"></div> */}
      {/* <div className="purple-blob"></div> */}
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flip-card w-full aspect-square stat-animation"
        >
          <div className="flip-card-inner">
            <div
              key={index}
              className="flip-card-front w-full aspect-square bg-background border border-border shadow-md rounded-lg hover:rotate-0 transition-transform flex items-center justify-center flex-col p-4 text-primary relative"
            >
              <h1 className="font1 text-7xl flex ">{stat.value}</h1>
              <p className="font1 text-2xl">{stat.title}</p>
            </div>
            <div className="w-full aspect-square bg-[#00e3ffeb]  border border-border shadow-md rounded-lg p-6 font-bold flip-card-back">
              <p className="back-card-content">{stat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = React.useState(1);
  const testimonialContainer = React.useRef<HTMLDivElement>(null);

  const scrollToCenter = (index: number): void => {
    if (!testimonialContainer.current) return;

    const child = testimonialContainer.current.children[
      index + 6
    ] as HTMLElement; // Direct access if no spacer divs
    if (!child) return;

    const leftOffset =
      child.offsetLeft +
      child.offsetWidth / 2 -
      testimonialContainer.current.offsetWidth / 2;

    testimonialContainer.current.scrollTo({
      left: leftOffset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToCenter(selectedTestimonial);
  }, [selectedTestimonial]);

  const updateSelectedTestimonial = (newIndex: number): void => {
    if (newIndex < 0) {
      newIndex = testimonials.length - 1; // Loop to the end
    } else if (newIndex >= testimonials.length) {
      newIndex = 0; // Loop back to start
    }
    setSelectedTestimonial(newIndex);
  };

  return (
    <div className="flex flex-col z-30 relative  items-center pb-20  pt-6 ">
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

      <div className="w-screen relative mt-6">
        {/* <div className="absolute h-[100vh] w-[300px]  z-20 left-0 bottom-0 test-grad-left"></div> */}
        {/* <div className="absolute h-[500px] w-[200px] z-20 right-0 bottom-0 test-grad-right"></div> */}
        <div
          className="testimonial-container gap-10  "
          ref={testimonialContainer}
        >
          <div className="centered relative testimonial-item"></div>
          <div className="centered relative testimonial-item"></div>
          <div className="centered relative testimonial-item"></div>
          <div className="centered relative testimonial-item"></div>
          <div className="centered relative testimonial-item"></div>
          <div className="centered relative testimonial-item"></div>

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item bg-card shadow-md border blurBack rounded-2xl text-2xl p-8 flex flex-col ${
                selectedTestimonial === index ? "centered" : "not-centered"
              }`}
            >
              <p className="font-bold">{testimonial.text}</p>
              <div className="flex gap-2 items-center mt-auto">
                <div className="h-10 w-10 relative rounded-full bg-card"></div>
                <div className=" w-fit ">{testimonial.creator}</div>
              </div>
            </div>
          ))}
          <div className="centered relative testimonial-item"></div>
        </div>
      </div>
      <div className="flex mx-auto w-fit gap-6 mt-4">
        <Button
          onClick={() => updateSelectedTestimonial(selectedTestimonial - 1)}
          className="rounded-full aspect-square p-4 h-fit w-fit"
        >
          <ChevronLeft className="h-12 w-12 text-background" />
        </Button>
        <Button
          onClick={() => updateSelectedTestimonial(selectedTestimonial + 1)}
          className="rounded-full aspect-square p-4 h-fit w-fit"
        >
          <ChevronLeft className="h-12 w-12 text-background rotate-180" />
        </Button>
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "  1",
    creator: "-Jon doe",
  },
  {
    text: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt libero. Aliquam erat volutpat. Nullam nec liberonec massa tincidunt condimentum. Nullam nec libero nec massatincidunt condimentum.",
    creator: "-Jon ",
  },
  {
    text: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt libero. Aliquam erat volutpat. Nullam nec liberonec massa tincidunt condimentum. Nullam nec libero nec massatincidunt condimentum.",
    creator: "-doe 2",
  },
  {
    text: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt libero. Aliquam erat volutpat. Nullam nec liberonec massa tincidunt condimentum. Nullam nec libero nec massatincidunt condimentum.",
    creator: "-Jon 3",
  },
  {
    text: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt libero. Aliquam erat volutpat. Nullam nec liberonec massa tincidunt condimentum. Nullam nec libero nec massatincidunt condimentum.",
    creator: "-3",
  },
  {
    text: "   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt libero. Aliquam erat volutpat. Nullam nec liberonec massa tincidunt condimentum. Nullam nec libero nec massatincidunt condimentum.",
    creator: "-",
  },
];

export function FAQ() {
  const questions = [
    {q: "Who is this for?", a: "answer here"},
    {
      q: "Why should  I need to invest in short form content?",
      a: "answer here",
    },
    {
      q: "Why choose Whitespace Media?",
      a: "answer here",
    },
    {
      q: "What can I expect from you guys?",
      a: "20 posts a month, comment replies, story posts etc. Report and monthly call. \n\n Talk about system efficiency",
    },
  ];

  return (
    <div className="flex flex-col relative container items-center mb-20">
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

const ContactUs = () => {
  return (
    <div className="container relative">
      <button className="relative w-[90%] mx-auto rounded-full h-[400px] border-4 flex items-center justify-center text-8xl font1 mb-20 font-bold hover:bg-[#181818] hover:text-background transition-colors duration-500 group">
        Contact Us
        <ArrowRight className="h-16 w-16 ml-4 group-hover:translate-x-[50px] transition-transform duration-500" />
      </button>
    </div>
  );
};

const Footer = () => {
  return <div className="w-full h-[200px] bg-[#181818] relative "></div>;
};
