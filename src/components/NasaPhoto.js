import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar'

const apiKey = process.env.REACT_APP_NASAPP_KEY

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

    return (
        <>
            <NavBar />
            <div className="nasa-photo">
                { photoData.media_type === "image" ? (
                    <img src={photoData.url} alt={photoData.title} className="photo" />
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
                <div>
                    <h1>{photoData.title}</h1>
                    <p className="date">{photoData.date}</p>
                    <p className="explanation">{photoData.explanation}</p>
                </div>
            </div>
        </>
    );
};

export default NasaPhoto;