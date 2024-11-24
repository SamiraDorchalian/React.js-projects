import React from "react";
import CharacterItems from "./CharacterItems";
import Spinner from "../ui/Spinner";

const CharactersGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItems key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharactersGrid;
