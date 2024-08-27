import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';

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
                <img src="/kisaan2.jpg" alt="" />
            </div>


        </div>
    );
}

export default HomePage;