import SearchBar from '../../components/searchBar/searchBar';
import Slideshow from '../../components/slideshow/Slideshow';
import TextRotator from '../../components/text/TextRotator';
import './homePage.scss';

const images = [
    "resize.jpg",
    "pexels-pat-whelen-2913248-6026441.jpg",
    "resize2.jpg",
]

const videoSrc = "ex-video.mp4";

function HomePage() {
    return (
        <div>
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <div className='title'>
                        <TextRotator />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis excepturi qui incidunt id, non pariatur eum vel laboriosam dicta dolor distinctio, aspernatur corporis voluptatum! Cum fuga laudantium magni id consequatur!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, sit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, molestiae?
                    </p>
                    <SearchBar />

                    <div className="boxes">
                        <div className="box">
                            <h1>Anywhere</h1>
                            <h2>in the world</h2>
                        </div>
                        <div className="box">
                            <h1>50+</h1>
                            <h2>Warehouses Registered</h2>
                        </div>
                        <div className="box">
                            <h1>100+</h1>
                            <h2>Properties</h2>
                        </div>
                    </div>


                </div>
            </div>
            <div className="imgContainer">
                <Slideshow images = {images} videoSrc = {videoSrc} />
            </div>

        </div>
            {/* post here to appear on landing page */}
            
        </div>
    );
}

export default HomePage;