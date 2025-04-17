"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/ui/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="max-w-screen-lg container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  justify-between xl:pt-8 xl:pb-18">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Freelance Creative Technologist</span>
            <h1 className="h2 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Asfandyar Ali</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A jack-of-all-trades (but master of fun), I speak Python’s slang
              and CSS puns. From data’s deep seas to pixels that play, I
              automate chaos in artful ways— where spreadsheets sing and
              animations sway.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 bg-accent hover:bg-accent/90 text-black hover:text-slate-800 transition-colors"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
