import { Soundcloud, RightArrow } from "../components/Icons";
import Image from "next/image";

export default function PlayerWidget() {
  return (
    <div className=" h-screen flex justify-center">
      <div className="min-w-min mt-4 h-20 rounded-md w-96 bg-red-500 flex pt-2 pb-2 ml-3 mr-3">
        <div className="w-20 pl-2 m-auto">
          <Image
            src="/icon.webp"
            width={180}
            height={180}
            alt={"Logo de la canción"}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex h-full flex-col text-left">
            <div className="m-auto pl-2">
              <div className="font-medium text-sm m-auto sm:text-lg">
                Super cubo
              </div>
              <div className="text-sm sm:text-lg">Piedri xd</div>
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
    </div>
  );
}
