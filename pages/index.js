import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { SliderData } from "../data/SliderData";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Timebear000 Responsive Nextjs Training - 01 </title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Timebear000 Responsive Nextjs Training - 01 " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Captur Photography" message="I capture moments in nature and keep them alive." />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
