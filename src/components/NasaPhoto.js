import React from 'react';
import { useState, useEffect } from 'react';

const NasaPhoto = () => {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=kQVoyYbAy9ad2LhNgZBZDgdVL8DSmhckUDefW35M`
            );

            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
        
    }, []);

    if (!photoData) return <div />;

    return (
        <div>
            <img 
            src={photoData.url}
            alt={photoData.title}
            />
        </div>
    );
};

export default NasaPhoto;