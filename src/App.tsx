import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import Photo from './pages/Photo';
import { ImageProvider } from './context/ImageProvider';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

    return (

        <div>
            <Header/>

            <ImageProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home/" element={<Home />} />
                    <Route path="/game/" element={<Game />} />
                    <Route path="/resume/" element={<Resume />} />
                    <Route path="/gallery/" element={<Gallery />} />
                    <Route path="/photo/:id" element={<Photo />} />
                    <Route path="/contact/" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ImageProvider>

            <Footer/>
        </div>
    )
}

export default App;
