import type { NextPage } from "next";
import Head from "next/head";
import PlayerWidget from "../components/PlayerWidget";
import { InfoIcon, HeartIcon, StatsIcon, HelpIcon } from "../components/Icons";

import { GetServerSideProps } from "next";
import { CSSObjectWithLabel, Options } from "react-select";
import Autocomplete from "../components/Autocomplete";
import executeQuery from "../db/db";
import { AutocompleteType, Song } from "../db/db.types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = (await executeQuery({
    query: "SELECT * FROM songs;SELECT * FROM autocomplete",
  })) as any;

  const song = result[0][0] as Song;
  const autocomplete = result[1] as AutocompleteType[];

  const autocompleteData: any = Array.from(autocomplete, (e) => ({
    value: e.id,
    label: e.titulo,
  }));

  return {
    props: JSON.parse(JSON.stringify({ song, autocompleteData })), // will be passed to the page component as props
  };
};

type QueryResult = {
  song: Song;
  autocompleteData: any;
};

const Home = ({ song, autocompleteData }: QueryResult) => {
  return (
    <div className="h-screen flex flex-col text-center bg-zinc-900">
      <Head>
        <title>Oirdle</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="border-b border-white border-solid w-screen h-16">
        <div className="dark flex justify-center grow">
          <div className="flex justify-between max-w-screen-sm w-full mx-auto pr-3 pl-3">
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

      {/*Guesses*/}
      <div className="h-screen flex justify-center">
        <div className="max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto p-3">
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

      {/*Song Player*/}
      <PlayerWidget />

      {/*ProgressBar*/}
      <div className="flex justify-center flex-col pt-5">
        <div className="flex flex-col h-28">
          <div className="flex flex-col border-t border-b border-white">
            <div className="max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto pl-3 pr-3">
              <div style={{ backgroundColor: "#2d2d33" }} className="flex h-4">
                <div className="w-12 h-full border-r border-white"></div>
                <div className="w-16 h-full border-r border-white"></div>
                <div className="w-24 h-full border-r border-white"></div>
                <div className="w-36 h-full border-r border-white"></div>
                <div className="w-44 h-full border-r border-white"></div>
                <div className="w-60 h-full"></div>
              </div>
            </div>
          </div>

          <div className="max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto pl-3 pr-3">
            <div className="pt-3 flex-col items-evenly">
              <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0 border-custom-line">
                <div className="w-full">
                  <Autocomplete options={autocompleteData} />
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
