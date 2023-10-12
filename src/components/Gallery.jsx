import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useGlobalContext } from "../context";
import axios from "axios";

const Gallery = () => {
  const { searchValue, setSearchValue } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchValue],
    queryFn: async () => {
      const result = await axios.get(`https://api.unsplash.com/search/photos?query=${searchValue}&client_id=${import.meta.env.VITE_API_KEY}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      { results.map(item => (
        <img src={ item?.urls?.regular } key={item.id} alt={item.alt_description} className="img" />
      )) }

    </section>
  );
};

export default Gallery;
