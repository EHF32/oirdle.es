import { GetServerSideProps } from "next";
import { CSSObjectWithLabel, Options } from "react-select";
import Autocomplete from "../components/Autocomplete";
import executeQuery from "../db/db";
import { AutocompleteType, Song } from "../db/db.types";

export default function testdb({ song, autocompleteData }: QueryResult) {
  return (
    <div>
      {JSON.stringify(autocompleteData)}

      <Autocomplete options={autocompleteData} />
    </div>
  );
}

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
