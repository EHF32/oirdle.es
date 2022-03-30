import { GetServerSideProps } from "next";
import executeQuery from "../db/db";
import { Song } from "../db/db.types";

export default function testdb({ song }: { song: Song }) {
  return <div>{song.titulo}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = (await executeQuery({
    query: "SELECT * FROM songs",
  })) as Song[];

  console.log("result: ", result);
  return {
    props: { song: JSON.parse(JSON.stringify(result[0])) }, // will be passed to the page component as props
  };
};
