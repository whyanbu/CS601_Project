import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../context/ImageContext";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const Gallery = () => {

    const { images } = useContext(ImageContext);
    const [categories, setCategories] = useState<string[]>([]);
    const defaultCategory = "All Categories";
    const [filter, setFilter] = useState<string>(sessionStorage.getItem("category") || defaultCategory);
    
    useEffect(() => {
        const set = new Set(images.map((img) => img.category));
        setCategories([defaultCategory, ...Array.from(set).sort()]);
    }, [images]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
        sessionStorage.setItem("category", e.target.value);
    };

    return (
        <div className="bg-c4 py-15 px-15">
            <PageTitle text="Gallery" className="before:text-c1"/>

            {/* filter drop down menu */}
            <div className="text-center font-content md:text-right mt-10">
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
                    {images.filter(img => filter === defaultCategory || img.category === filter).map(img => (
                        <Link key={img.id} to={`/photo/${img.id}`} className="product-list-item-wrap">
                            <img
                                key={img.id}
                                src={`${import.meta.env.BASE_URL}images/${img.filename}`}
                                alt={`Image ${img.id}`}
                                className="cursor-pointer object-cover w-full h-48 rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;