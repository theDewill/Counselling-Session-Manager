import Image from "next/image";

import Navbar from "@/components/custom/Navbar";
import Hero from "@/components/custom/Hero";
import Booklist from "@/components/custom/Booklist";
import { db } from "../firebaseConf";

import BackIMG from "@/public/psychology.jpeg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex flex-col m-0 p-0">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/psychology.jpeg')` }}
      >
        {/* This div is just to make the background image stay in place and cover the entire screen */}
      </div>

      <Navbar activeTab={"Home"} />

      <Hero />

      <div
        style={{ backdropFilter: "blur(25px)" }}
        className="z-10 w-full h-[1000px] p-10 rounded-t-[70px] mt-[100vh] text-[#ffff] bg-[rgb(161,161,161 / 0%)]"
      >
        <p className="text-[2.5rem] font-bold ml-[6vw]">Our Books</p>
        <Booklist />
      </div>

      {/* Added Minus padding to merge with the above element with bacdrop */}
      <div
        style={{ backdropFilter: "blur(25px)" }}
        className="z-10 w-full flex flex-col items-center shadow-black h-fit p-10 rounded-t-[70px] mt-[-100px] text-[rgb(114,114,114)] bg-[#ffff]"
      >
        <p className="text-[2.5rem] self-start font-bold ml-[6vw]">
          More from Us
        </p>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
