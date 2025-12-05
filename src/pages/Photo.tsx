import { Link, useParams } from "react-router-dom";
import { ImageContext } from "../context/ImageContext";
import { useContext } from "react";
import type { Image } from "../types";
import PageTitle from "../components/PageTitle";

interface RouteParams {
    id: string
}

const Photo = () => {

    const { images } = useContext(ImageContext);
    const { id } = useParams<keyof RouteParams>() as RouteParams;

    const image = images.find((image: Image) => image.id === id);
    if (!image) return (
        <h1 className="text-center text-5xl font-semibold bg-c5 text-c1 py-50">
            Sorry! Image Not Found.
        </h1>    
    );

    return (
        <div className="flex flex-col w-9/10 mx-auto mt-10">
            <PageTitle text="Photo" color={"c4"}/>
            <Link className="bg-c4 text-content text-white text-xl py-2 px-3 my-5 w-50 text-center rounded-2xl shadow-xl hover:bg-c2 transition" to="/gallery">
                ← Back to Gallery
            </Link>
            <img
                src={`${import.meta.env.BASE_URL}images/${image.filename}`}
                alt={`Image ${image.id}`}
                className="max-w-[100vw] md:max-w-[90vw] rounded-lg shadow-xl/30"
            />
            {/* Description */}
            <p className="font-content text-c5 text-lg mt-4 mx-auto mt-4 px-4 text-wrap text-center">
                {image.description}
            </p>
            {/* Category */}
            <p className="font-content text-c5 text-base my-4 mx-auto px-4 text-wrap text-center">
                ({image.category})
            </p>
        </div>
    );
};

export default Photo;