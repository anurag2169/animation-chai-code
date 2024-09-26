import { ArrowRight, Zap, Video } from "lucide-react";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="absolute h-screen w-full">
        <Spline scene="https://prod.spline.design/S0DfuNv-i-rsEzfr/scene.splinecode" />
      </div>
      <div className="relative min-h-screen text-white bg-transparent flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold  mb-6">
            Chai & Code - Sip and Script
          </h1>
          <p className="text-xl sm:text-2xl mb-12">
            Grab your chai and dive into the world of coding, where every sip
            brings you closer to mastering tech!
          </p>
          <div className="flex flex-row gap-4 justify-center items-center">
            <ActionButton
              icon={<Zap className="w-6 h-6" />}
              text="Quick Start"
              color="bg-blue-500 hover:bg-blue-600"
              link="https://chaicode.com/"
            />
            <ActionButton
              icon={<Video className="w-6 h-6" />}
              text="Learn More"
              color="bg-red-500 hover:bg-red-600"
              link="https://www.youtube.com/@chaiaurcode"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, text, color, link = "#" }: any) {
  return (
    <Link href={link} >
      <button
        className={`${color} text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-2`}
      >
        {icon}
        <span>{text}</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </Link>
  );
}
