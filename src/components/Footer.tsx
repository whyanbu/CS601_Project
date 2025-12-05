const Footer = () => {
    return (
        <footer className="pt-5 md:pt-0 text-sm flex flex-col-reverse md:flex-row justify-between content-center shadow-[0_-4px_8px_rgba(0,0,0,0.1)]">
            <div className="p-3 m-2 text-center font-semibold">
                © 2025 by Raphael Lam.
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 p-3">
                    <a href="." className="flex flex-row md:flex-col items-center gap-x-2">
                        <span className="font-extralight">Tel</span>
                        <span>943-243-323</span>
                    </a>
                </div>
                <div className="flex-1 p-3">
                    <a href="." className="flex flex-row md:flex-col items-center gap-x-2">
                        <span className="font-extralight">Email</span>
                        <span>raphael.lam@gmail.com</span>
                    </a>
                </div>
                <div className="flex-1 p-3">
                    <div className="flex flex-row md:flex-col items-center gap-x-2">
                        <span className="font-extralight">Follow</span>
                        <span className="flex flex-row">
                            <a href="."><img src={`${import.meta.env.BASE_URL}images/facebook.avif`} className="max-h-6"/></a>
                            <a href="."><img src={`${import.meta.env.BASE_URL}images/LinkedIn.avif`} className="max-h-6"/></a>
                            <a href="."><img src={`${import.meta.env.BASE_URL}images/instagram.avif`} className="max-h-6"/></a>
                            <a href="."><img src={`${import.meta.env.BASE_URL}images/twitter.avif`} className="max-h-6"/></a>
                            
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;