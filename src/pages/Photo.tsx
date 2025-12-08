import { Link, useParams } from "react-router-dom";
import { ImageContext } from "../context/ImageContext";
import { useContext, useEffect, useRef, useState } from "react";
import type { Image } from "../types";
import PageTitle from "../components/PageTitle";

interface RouteParams {
    id: string
}

const Photo = () => {

    const { images } = useContext(ImageContext);
    const { id } = useParams<keyof RouteParams>() as RouteParams;
    
    const defaultCategory = "All Categories";
    const [filter] = useState<string>(sessionStorage.getItem("category") || defaultCategory);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [prevIndex, setPrevIndex] = useState(-1);
    const [nextIndex, setNextIndex] = useState(-1);

    const prevRef = useRef<HTMLAnchorElement>(null);
    const nextRef = useRef<HTMLAnchorElement>(null);

    const image = images.find((image: Image) => image.id === id);
    
    useEffect(() => {
        setCurrentIndex(images.findIndex((image: Image) => image.id === id));
    }, [images, id]);

    useEffect(() => {
        if (filter === defaultCategory) {
            setNextIndex(currentIndex + 1 < images.length ? currentIndex + 1 : -1);
            setPrevIndex(currentIndex - 1);
        } else {
            const n = images.slice(currentIndex + 1).findIndex(img => img.category === filter);
            setNextIndex(n === -1 ? -1 : currentIndex + 1 + n);
            const p = images.slice(0, currentIndex).reverse().findIndex(img => img.category === filter);
            setPrevIndex(p === -1 ? -1 : currentIndex - 1 - p);
        }
    }, [currentIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                prevRef.current?.click();
            }
            if (e.key === "ArrowRight") {
                nextRef.current?.click();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
    

    if (!image) return (
        <h1 className="text-center text-5xl font-semibold bg-c5 text-c1 py-50">
            Sorry! Image Not Found.
        </h1>    
    );

    return (
        <div className="flex flex-col w-9/10 mx-auto mt-10">
            <PageTitle text="Photo" className="before:text-c4"/>
            <Link className="bg-c4 text-content text-white text-xl py-2 px-3 my-5 w-50 text-center rounded-2xl shadow-xl hover:bg-c2 transition" to="/gallery">
                ← Back to Gallery
            </Link>
            <div className="relative w-[90vw]">
                <img
                    src={`${import.meta.env.BASE_URL}images/${image.filename}`}
                    alt={`Image ${image.id}`}
                    className="w-full h-auto block rounded-lg shadow-xl/30"
                />
                {prevIndex >= 0 && 
                    <Link ref={prevRef} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold" to={`/photo/${images[prevIndex].id}`}>
                        ←
                    </Link>
                }
                {nextIndex >= 0 &&
                    <Link ref={nextRef} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold" to={`/photo/${images[nextIndex].id}`}>
                        →
                    </Link>
                }
            </div>
            
            {/* Description */}
            <p className="font-content text-c5 text-lg mt-4 mx-auto mt-4 px-4 text-wrap text-center">
                {image.description}
            </p>
            {/* Category */}
            <p className="font-content text-c5 text-base my-4 mx-auto px-4 text-wrap text-center">
                (Category: {image.category})
            </p>
        </div>
    );
};

export default Photo;