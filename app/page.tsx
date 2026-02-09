import Image from "next/image";
import { Hero } from "./Components/hero";

export default function Home() {
  return (
    // Page.tsx par pehli class 
    // If I want to apply a particular kind of color to the entier page of 100vh 
    // Then I will simple follow the 100vh
  <div className=" h-screen bg-neutral-900 flex justify-center" >
    <Hero/>
  </div>
  );
}
 