import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../context/ImageContext";
import type { Image } from "../types";

const Gallery = () => {

    const { images } = useContext(ImageContext);
    const [categories, setCategories] = useState<string[]>([]);
    const [filteredImages, setFilteredImages] = useState<Image[]>([]);

    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>("All Categories");

    useEffect(() => {
        const set = new Set(images.map((img) => img.category));
        setFilteredImages([...images]);
        setCategories(["All Categories", ...Array.from(set)]);
    }, [images]);
    
    // Open modal
    const openModal = (index: number) => setCurrentIndex(index);

    // Close modal
    const closeModal = () => setCurrentIndex(null);

    // Navigate images
    const prevImage = () => {
        if (currentIndex !== null)
            // setCurrentIndex((currentIndex - 1 + images.length) % images.length);
            setCurrentIndex(
                (prev) =>
                    prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
            );
    };

    const nextImage = () => {
        if (currentIndex !== null)
            // setCurrentIndex((currentIndex + 1) % images.length);
            setCurrentIndex(
                (prev) =>
                    prev === null ? null : (prev + 1) % filteredImages.length
            );
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (currentIndex === null) return;
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
        setFilteredImages(
            e.target.value === "All Categories" ? images : images.filter((img) => img.category === e.target.value)
        );
    };

    useEffect(() => {
        if (currentIndex !== null && currentIndex >= filteredImages.length) {
            setCurrentIndex(null);
        }
    }, [filteredImages]);

    return (
        <div className="bg-c4 py-15 px-15">
            <div className="flex flex-row justify-between max-w-48 my-0 mx-auto items-center">
                <span className="w-6 h-6 rounded-full bg-c1 flex items-center justify-center text-2xl font-bold"></span>
                <span className="font-bold text-5xl">Gallery</span>
            </div>

            {/* filter drop down menu */}
            <div className="text-center md:text-right mt-10">
                <span className="pr-4">Filtered by: </span>
                <select
                    value={filter}
                    onChange={(e) => handleFilterChange(e)}
                    className="border border-gray-300 rounded-lg px-3 py-2 bg-white"
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className="mt-10">
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.url}
                            alt={`Image ${index}`}
                            className="cursor-pointer object-cover w-full h-48 rounded-lg hover:scale-105 transition-transform duration-300"
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>

                {/* Modal */}
                {currentIndex !== null && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >

                        {/* Prevent closing when clicking on the image */}
                        <div className="relative flex flex-col w-max" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={filteredImages[currentIndex].url}
                                alt={`Image ${currentIndex}`}
                                className="mx-auto max-h-[100vh] md:max-h-[90vh] max-w-[100vw] md:max-w-[90vw] rounded-lg shadow-lg"
                            />
                            {/* Description */}
                            <p className="text-c1 text-xs my-4 mx-auto px-4 text-wrap">
                                {filteredImages[currentIndex].description}
                            </p>

                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 text-white text-2xl font-bold"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeModal();
                                }}
                            >
                                &times;
                            </button>

                            {/* Left & Right Arrows */}
                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                            >
                                &#8592;
                            </button>
                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                            >
                                &#8594;
                            </button>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;