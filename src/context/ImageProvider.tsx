import { useEffect, useState } from "react";
import type { Image } from "../types";
import { ImageContext } from "./ImageContext";
import { shuffle } from "../utils/shuffle";

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
            const data: Image[] = await response.json();
            const shuffled = shuffle<Image>(data);
            setImages(shuffled);
        };
        fetchImages();
    }, []);

    

    return (
        <ImageContext.Provider value={{ images }}>
            {children}
        </ImageContext.Provider>
    );

};