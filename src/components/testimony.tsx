import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "I am amazed at Sabbir's ability to create intriguing designs. He is really cool guy to work with and so Leader like attitude",
      name: "Md Mahfuz",
      designation: "Product Designer at TechFlow",
      src: "/mahfuz.jpg",
    },
    {
        quote: "Sabbir leads with a positive attitude and a willingness to help others. He is a great team player and is always willing to go the extra mile to help out his team.",
        name: "Selim Reza",
        designation: "Operations Director at CloudScale",
        src: "/selim.jpg",
      },
    {
      quote:"I have worked with Sabbir on a number of projects and I have always been impressed with his design skills. He is a great team player and always brings a positive attitude to the table. I would highly recommend Sabbir for any design project.",
      name: "Rumon Khan",
      designation: "Product Manager at TechFlow",
      src: "/rumon.jpg",
    },
    {
      quote: " Sabbir is a talented designer who has a great eye for detail. He is a team player and always brings a positive attitude to the table. I would highly recommend Sabbir for any design project.",
      name: "Mohammad Rasel ",
      designation: "CTO at InnovateSphere",
      src: "/rasel.png",
    },

    {
      quote: "his design proficiency is remarkable, consistently delivering top-notch work that elevates user experiences. His creativity and keen eye for detail make him an admirable asset when it comes to design work.",
      name: "Emon Mia",
      designation: "Engineering Lead at DataPro",
      src: "/emon.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
