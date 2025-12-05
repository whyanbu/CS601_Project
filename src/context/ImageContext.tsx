import { createContext } from "react";
import type { Image } from "../types";

interface ImageContextType {
    images: Image[],
}

export const ImageContext = createContext<ImageContextType>( { images: [] } );