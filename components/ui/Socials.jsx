import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/imasfandyarali",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/iasfandyarali/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@asfandanimates",
  },
  {
    icon: <BiLogoNetlify />,
    path: "#",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`flex gap-x-5 text-xl ${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`hover:text-accent transition-all duration-300 ${iconStyles}`}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

/*
Hey there! Let me explain how this code works in a fun way! 🚀

1. First, we make a list (array) of our social media links, like a toy box with different toys:
   - We have GitHub (like a digital playground)
   - LinkedIn (like a place where grown-ups talk about work)
   - YouTube (where we watch videos)

2. Each social media link has two things:
   - An icon (like a small picture)
   - A path (like an address to get there)

3. The Socials component is like a magic box that:
   - Takes two special decorations (props):
     * containerStyles (how to style the whole box)
     * iconStyles (how to make each icon look pretty)

4. When the code runs:
   - It creates a div (like a container)
   - Then it looks at our list of social media links
   - For each social media link it:
     * Makes a clickable button (Link)
     * Puts the icon inside it
     * Makes it pretty with special effects when you hover over it
     * Adds the correct website address

5. The map function is like a helper that:
   - Takes each social media item from our list
   - Creates a beautiful button for it
   - Does this for every item in the list

6. When you click any icon:
   - It will take you to that social media website
   - The icon changes color when you move your mouse over it
   - It's like magic! ✨

This is why when you see the website, you'll see all three social media 
icons in a row, and they all work like magic buttons! 🎮
*/
