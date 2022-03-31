import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  InfoIcon,
  Soundcloud,
  HeartIcon,
  StatsIcon,
  HelpIcon,
  RightArrow,
} from "../components/Icons";

const Home: NextPage = () => {
  return (
    <div className="h-screen flex flex-col text-center bg-gray-800">
      <Head>
        <title>Oirdle</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="border-b border-white border-solid w-screen h-16">
        <div className="dark flex justify-center grow">
          <div className="flex justify-between w-2/5">
            <div className="pt-5 pb-5 pl-2 pr-2">
              <InfoIcon />
            </div>
            <div className="pt-5 pb-5 pl-2 pr-2">
              <HeartIcon />
            </div>
            <div className="grow text-center m-auto">
              <span className="font-seriffont text-4xl text-white">Oirdle</span>
            </div>
            <div className="pt-5 pb-5 pl-2 pr-2">
              <StatsIcon />
            </div>
            <div className="pt-5 pb-5 pl-2 pr-2">
              <HelpIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex justify-center">
        <div className="max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto">
          <div className="pt-3 flex-col items-evenly">
            <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0 border-custom-line">
              <div className="w-5 h-5"></div>{" "}
            </div>
            <div className="p-2 mb-2 border  flex items-center last:mb-0">
              <div className="w-5 h-5"></div>{" "}
            </div>
            <div className="p-2 mb-2 border flex items-center last:mb-0">
              <div className="w-5 h-5"></div>{" "}
            </div>
            <div className="p-2 mb-2 border flex items-center last:mb-0">
              <div className="w-5 h-5"></div>{" "}
            </div>
            <div className="p-2 mb-2 border flex items-center last:mb-0">
              <div className="w-5 h-5"></div>{" "}
            </div>
            <div className="p-2 mb-2 border flex items-center last:mb-0">
              <div className="w-5 h-5"></div>{" "}
            </div>
          </div>{" "}
        </div>
      </div>

      {/*WIDGET SOUNDCLOUD*/}
      {/* <div className="h-screen flex justify-center">
        <div className="mt-4 h-20 rounded-md w-1/3 bg-red-500 flex p-3">
          <div className="w-20">
            <img src="/icon.webp" className="h-full" />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex h-full flex-col text-left">
              <div className="m-auto">
                <div className="font-medium text-lg m-auto">Super cubo</div>
                <div>Piedri xd</div>
              </div>
            </div>
            <div className="flex h-full justify-center">
              <div className="m-auto">
                <Soundcloud />
              </div>
              <div className="m-auto">
                <RightArrow />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/*WIDGET ADIVINAR*/}
      <div className="flex justify-center flex-col">
        <div className="flex flex-col border-t border-white border-solid w-screen h-28">
          <div className="flex justify-center">
            <div className="flex border-b border-l border-r border-white w-1/3 h-4">
              <div className="w-12 h-full border-r border-white"></div>
              <div className="w-16 h-full border-r border-white"></div>
              <div className="w-24 h-full border-r border-white"></div>
              <div className="w-36 h-full border-r border-white"></div>
              <div className="w-44 h-full border-r border-white"></div>
              <div className="w-60 h-full border-r border-white"></div>
            </div>
          </div>

          <div className="max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto">
            <div className="pt-3 flex-col items-evenly">
              <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0 border-custom-line">
                <div className="w-5 h-5"></div>{" "}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
