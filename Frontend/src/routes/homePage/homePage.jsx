import SearchBar from '../../components/searchBar/SearchBar';
import Slideshow from '../../components/slideshow/Slideshow';
import './homePage.scss';

const images = [
    "kisaan2.jpg",
    "pexels-pat-whelen-2913248-6026441.jpg",
    "pexels-rihan-ishan-das-739500-2519332.jpg",

]

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Need land to store harvested produce?
                        <br />
                        AgroVision is here for you BBG!
                    </h1>
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
                <Slideshow images = {images} />
            </div>


        </div>
    );
}

export default HomePage;