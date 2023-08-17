import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePhoto = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const fetchPhotos = async (searchQuery) => {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=20`,
      {
        headers: {
          Authorization:
            "KoTX3Sk4tR9ZX41frxL735rS66uGe4FKonLna7TG4QcTFO4cLD0O4DOj",
        },
      }
    );
    return response.data.photos;
  };

  const {
    data: photos,
    isError,
    error,
    refetch,
  } = useQuery(["photos", searchQuery], () => fetchPhotos(searchQuery), {
    enabled: searchQuery !== "", // Enable the query when searchQuery is not empty
  });

  const { data: randomPhotos } = useQuery(["randomPhotos"], async () => {
    const response = await axios.get(
      "https://api.pexels.com/v1/curated?per_page=50",
      {
        headers: {
          Authorization:
            "KoTX3Sk4tR9ZX41frxL735rS66uGe4FKonLna7TG4QcTFO4cLD0O4DOj",
        },
      }
    );
    return response.data.photos;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  return {
    photos: photos || [],
    randomPhotos: randomPhotos || [],
    isError,
    error,
    searchQuery,
    setSearchQuery,
    handleSearch,
  };
};

export default usePhoto;
