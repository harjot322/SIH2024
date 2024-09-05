import Buttons from '../../components/buttons/Buttons';
import SearchBar from '../../components/searchBar/searchBar';
import Slideshow from '../../components/slideshow/Slideshow';
import TextRotator from '../../components/text/TextRotator';
import './homePage.scss';

const images = [
    "resize.jpg",
    "pexels-pat-whelen-2913248-6026441.jpg",
    "resize2.jpg",
]

// const videoSrc = "ex-video.mp4";

function HomePage() {
    return (
        <div>
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <div className='title'>
                        <TextRotator />
                    </div>
                    <p className='para'>
                    Welcome to our platform dedicated to revolutionizing agriculture through Assured Contract Farming. We offer innovative solutions that ensure stable market access for farmers by connecting them directly with buyers through pre-arranged contracts. Our system stabilizes pricing, reduces market volatility, and empowers farmers to achieve fair and predictable returns
                    </p>
                    <Buttons />
                    {/* <SearchBar /> */}

                    {/* button ayenge yaha */}

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
                <Slideshow images = {images}  />
            </div>

        </div>
            {/* post here to appear on landing page */}
            
        </div>
    );
}

export default HomePage;