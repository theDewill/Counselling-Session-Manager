import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center text-[4rem] font-bold mt-[30vh] fixed text-[#ffff]">
      <div className="text-center">
        <h1>Sithsuwa Psychology</h1>
        <h1>Counseling</h1>
      </div>
      <Button variant="outline" className="mt-[25px] bg-white text-black w-fit">
        Book a Counseling Session Now
      </Button>
    </div>
  );
}
