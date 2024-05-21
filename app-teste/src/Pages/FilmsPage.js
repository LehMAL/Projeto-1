import Slider from "react-slick";
import React from "react";
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
        pauseOnHover: true,
        appendDots: dots => (
            <div
              style={{
                padding: "30px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                color: "blue",
                borderRadius: "10px",
                border: "5px white solid"
              }}
            >
            </div>
          )
        };
   


    return(
        <div className="pt-2">

            <div className="card mb-5 mx-3">

                <div className="slider-container">

                <Slider {...settings}>
                    <div className="slide">
                    <img src={frank} alt="Coraline" className="slider-image" />
                    </div>
                    <div className="slide">
                    <img src={frank} alt="Frankenweenie" className="slider-image" />
                    </div>
                    <div className="slide">
                    <img src={megamente} alt="Megamente" className="slider-image" />
                    </div>
                </Slider>
                <br/>
                
                </div>
                <div className="card-header"><h2>Catálogo de Filmes</h2></div>

              
            <div className="card-body mt-2">
                
            <div className="catalog-container">

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