"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design", // Fixed "U1" to likely intended "UI/UX Design"
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
  {
    num: "03",
    title: "Creative Technology", // Changed duplicate "Web Development" to more relevant title
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },

  {
    num: "04",
    title: "Creative Technology", // Changed duplicate "Web Development" to more relevant title
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
    href: "",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center py-8 xl:py-0">
      <div className="max-w-screen-lg container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justifiy-center gap-3 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}{" "}
                  </div>
                  <Link
                    href={service.href}
                    className="w-12 h-12 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 p-2"
                  >
                    <BsArrowDownRight className="text-primary text-xl" />
                  </Link>
                </div>
                <h2 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <h2 className="text-white/60 text-sm">{service.description}</h2>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;

// <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//   <div className="container mx-auto">
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="grid grid-cols-1 md:grid-cols-2 gap-[60vh]"
//     >
//       {services.map((service, index) => {
//         return (
//           <div
//             key={index}
//             className="flex-1 flex flex-col justifiy-center gap-6 group"
//           >
//             <div className="w-full flex justify-between items-center">
//               <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
//                 {service.num}
//               </div>
//               <Link
//                 href={service.href}
//                 className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
//               >
//                 <BsArrowDownRight className="text-primary text-3xl" />
//               </Link>
//             </div>
//             <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
//               {service.title}
//             </h2>
//             <h2 className="text-white/60">{service.description}</h2>
//             <div className="border-b border-white/20 w-full"></div>
//           </div>
//         );
//       })}
//     </motion.div>
//   </div>
// </section>
