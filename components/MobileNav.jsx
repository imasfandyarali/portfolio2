"use client"; // Marks this as a Client Component in Next.js

// Importing UI components for a mobile sheet/sidebar
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Next.js navigation utilities
import { usePathname } from "next/navigation"; // Hook to get current route path
import Link from "next/link"; // Next.js optimized link component

// Icon import from React Icons library
import { CiMenuFries } from "react-icons/ci"; // Hamburger menu icon

// Navigation links array (currently incomplete)
const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
]; // Missing closing bracket and semicolon fixed

const MobileNav = () => {
  const pathname = usePathname(); // Gets current route path for active link styling

  return (
    <Sheet>
      {" "}
      {/* Main container for mobile navigation drawer */}
      <SheetTrigger className="flex justify-center items-center">
        {/* Hamburger menu button that triggers the sheet */}
        <CiMenuFries className="text-[32px] text-accent" />
        {/* Fixed typo: Changed 'ClientFries' to 'CiMenuFries' */}
        {/* Removed special character '■' before text-accent */}
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Content area of the mobile navigation */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Asfand <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>{" "}
        {/* Placeholder for logo */}
        {/* Typically would map through Links array here */}
        {/* nav  */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  // Check if current link matches active route
                  link.path === pathname
                    ? // Active link styling (accent color + bottom border)
                      "text-accent border-b-2 border-accent"
                    : // Default/inactive link styling (white text)
                      "text-white"
                }
                // Base styles for all links
                text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
