import Slider from "react-slick";
import React from "react";
import coraline from '../Images/coraline.jpg';
import frank from '../Images/frank.png';
import megamente from '../Images/megamente.jpg';
import coraline_capa from '../Images/coraline_capa.jpg';
import megamente_capa from '../Images/megamente_capa.jpg';
import frank_capa from '../Images/Frankenweenie_capa.png';
import '../Components/ImageSliderComponent.css';




function FilmsPage(){

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };


    return(
        <div className="pt-2">

            <div className="card">

                <div className="slider-container">

                <Slider {...settings}>
                    <div className="slide">
                    <img src={coraline} alt="Coraline" className="slider-image" />
                    </div>
                    <div className="slide">
                    <img src={frank} alt="Frank" className="slider-image" />
                    </div>
                    <div className="slide">
                    <img src={megamente} alt="Megamente" className="slider-image" />
                    </div>
                </Slider>
                
                </div><br/>

              
            <div className="card-body mt-2">
                
            <div className="catalog-container">

                    <h2>Catálogo de Filmes</h2>
                    <div className="catalog-grid">

                    <img src={coraline_capa} alt="Filme 1" className="catalog-image" />

                    <img src={frank_capa} alt="Filme 2" className="catalog-image" />

                    <img src={megamente_capa} alt="Filme 3" className="catalog-image" />

                    <img src={coraline_capa} alt="Filme 4" className="catalog-image" />
                </div>

                </div>

                

            </div>
        </div>
        </div>
                
    );
}

export default FilmsPage;