import type { NextPage } from "next";
import Head from "next/head";
import PlayerWidget from "../components/PlayerWidget";
import { InfoIcon, HeartIcon, StatsIcon, HelpIcon } from "../components/Icons";

import { GetServerSideProps } from "next";
import { CSSObjectWithLabel, Options } from "react-select";
import Autocomplete from "../components/Autocomplete";
import executeQuery from "../db/db";
import { AutocompleteType, Song } from "../db/db.types";
import BaseDialog from "../components/dialogs/BaseDialog";
import { Fragment } from "react";

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
    <Fragment>
      <BaseDialog isOpen={true} setIsOpen={() => null}></BaseDialog>
      <div className="flex flex-col h-screen text-center bg-zinc-900">
        <Head>
          <title>Oirdle</title>
        </Head>
        <div className="w-screen h-16 border-b border-white border-solid">
          <div className="flex justify-center dark grow">
            <div className="flex justify-between w-full pl-3 pr-3 mx-auto max-w-screen-sm">
              <div className="pt-5 pb-5 pl-2 pr-2">
                <InfoIcon />
              </div>
              <div className="pt-5 pb-5 pl-2 pr-2">
                <HeartIcon />
              </div>
              <div className="m-auto text-center grow">
                <span className="font-seriffont text-4xl text-white">
                  Oirdle
                </span>
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
        <div className="flex justify-center h-screen">
          <div className="flex flex-col justify-between w-full h-full p-3 mx-auto overflow-auto max-w-screen-sm">
            <div className="flex-col pt-3 items-evenly">
              <div className="flex items-center p-2 mb-2 border border-custom-mg last:mb-0 border-custom-line">
                <div className="w-5 h-5"></div>{" "}
              </div>
              <div className="flex items-center p-2 mb-2 border last:mb-0">
                <div className="w-5 h-5"></div>{" "}
              </div>
              <div className="flex items-center p-2 mb-2 border last:mb-0">
                <div className="w-5 h-5"></div>{" "}
              </div>
              <div className="flex items-center p-2 mb-2 border last:mb-0">
                <div className="w-5 h-5"></div>{" "}
              </div>
              <div className="flex items-center p-2 mb-2 border last:mb-0">
                <div className="w-5 h-5"></div>{" "}
              </div>
              <div className="flex items-center p-2 mb-2 border last:mb-0">
                <div className="w-5 h-5"></div>{" "}
              </div>
            </div>{" "}
          </div>
        </div>

        {/*Song Player*/}
        <PlayerWidget />

        {/*ProgressBar*/}
        <div className="flex flex-col justify-center pt-5">
          <div className="flex flex-col h-28">
            <div className="flex flex-col border-t border-b border-white">
              <div className="flex flex-col justify-between w-full h-full pl-3 pr-3 mx-auto overflow-auto max-w-screen-sm">
                <div
                  style={{ backgroundColor: "#2d2d33" }}
                  className="flex h-4"
                >
                  <div className="w-12 h-full border-r border-white"></div>
                  <div className="w-16 h-full border-r border-white"></div>
                  <div className="w-24 h-full border-r border-white"></div>
                  <div className="h-full border-r border-white w-36"></div>
                  <div className="h-full border-r border-white w-44"></div>
                  <div className="h-full w-60"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between w-full h-full pl-3 pr-3 mx-auto overflow-auto max-w-screen-sm">
              <div className="flex-col pt-3 items-evenly">
                <div className="flex items-center p-2 mb-2 border border-custom-mg last:mb-0 border-custom-line">
                  <div className="w-full">
                    <Autocomplete options={autocompleteData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
