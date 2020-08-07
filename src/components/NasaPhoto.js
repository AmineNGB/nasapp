import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASAPP_KEY;

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  const handleHD = () => {
    const modal = document.querySelector(".modal");
    const photo = document.querySelector(".photo");

    photo.addEventListener("click", () => {
      modal.classList.add("open");
    });
  };

  const handleOut = (e) => {
    const modal = document.querySelector(".modal");

    modal.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
      }
    });
  };

  return (
    <>
      <NavBar />
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img
            src={photoData.url}
            alt={photoData.title}
            onClick={handleHD}
            className="photo"
          />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            className="photo"
          />
        )}
        <div className="content">
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
      <div className="modal">
        <img
          src={photoData.hdurl}
          alt="fullhd"
          onClick={handleOut}
          className="full-img"
        />
      </div>
    </>
  );
};

export default NasaPhoto;
