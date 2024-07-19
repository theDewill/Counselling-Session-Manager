import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ManasaImg from "@/public/Books/manasa.png";
import HudakImg from "@/public/Books/hudakalawa.png";
export default function Booklist() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          src={ManasaImg} // Path to the image file
          alt="Description of the image" // Alternative text for accessibility
          width={500} // Desired width of the image (can be a number or string)
          height={500} // Desired height of the image (can be a number or string)
          layout="fixed" // Defines how the image should resize (see layouts below)
        />
        <section className="text-start flex flex-col gap-2">
          <h2 className="text-[1.5rem] font-bold">{'"ළමා මනසට ජවය"'}</h2>
          <p className="text-[1.1rem] max-w-[600px]">
            සාර්ථක අධ්‍යාපනයක් උදෙසා අත්‍යවශ්‍ය අවධානය මතකය හා ආවර්ජන හැකියා
            වර්ධනය කිරීමට දායක වන නූතන මනෝවිද්‍යාත්මක ක්‍රමවේද දැයේ දරුවන්ට
            හඳුන්වා දෙන කෘතියකි.
          </p>

          <Button
            variant="outline"
            className="mt-[25px] bg-white text-black w-fit"
          >
            <Link href={"/Marketplace"}>Purchase the Book</Link>
          </Button>
        </section>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={HudakImg} // Path to the image file
          alt="Description of the image" // Alternative text for accessibility
          width={500} // Desired width of the image (can be a number or string)
          height={500} // Desired height of the image (can be a number or string)
          layout="fixed" // Defines how the image should resize (see layouts below)
        />
        <section className="text-start flex flex-col gap-3">
          <h2 className="text-[1.5rem] font-bold">{'"අසිරිමත් හුදකලාව"'}</h2>
          <p className="text-[1.1rem] max-w-[600px]">
            දරුවන්ගේ පොතපත කියවීමේ රුචිකත්වය නංවාලමින් වනයේ අතරමං වූ දරුවෙක්
            අධිෂ්ඨානයෙන් හා වීර්යයෙන් යුතුව එම අභියෝගයට මූහුණ දෙන අයුරු කියවෙන
            නව කතාව
          </p>
          <Button
            variant="outline"
            className="mt-[25px] bg-white text-black w-fit"
          >
            <Link href={"/Marketplace"}>Purchase the Book</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
