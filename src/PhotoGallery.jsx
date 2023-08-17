import React from "react";
import usePhoto from "./usePhoto";
import { AiOutlineSearch } from "react-icons/ai";

const PhotoGallery = () => {
  const {
    photos,
    randomPhotos,
    isError,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    handleSearch,
  } = usePhoto();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="photoGallery">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AiOutlineSearch className="search-icon" />
      </form>
      <div>
        {searchQuery === "" && randomPhotos ? (
          <div className="photos">
            {randomPhotos.map((photo) => (
              <div key={photo.id}>
                <img
                  className="photo"
                  src={photo.src.medium}
                  alt={photo.photographer}
                />
                <p>{photo.photographer}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="photos">
            {photos.map((photo) => (
              <div key={photo.id}>
                <img
                  className="photo"
                  src={photo.src.medium}
                  alt={photo.photographer}
                />
                <p>{photo.photographer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
