import Slider from "react-slick";
import React from "react";
import frank from '../Images/Frankenweenie.jpeg';
import coraline from '../Images/coraline.jpg';
import megamente from '../Images/megamente.jpeg';
import paranormal from '../Images/paranormal.jpeg';
import telefone from '../Images/telefone.jpeg';
import alice from '../Images/alice.jpg';
import oz from '../Images/oz.jpg';
import coraline_capa from '../Images/poster_coraline.jpg';
import megamente_capa from '../Images/poster_megamente.jpeg';
import frank_capa from '../Images/poster_frank.jpeg'
import jack_capa from '../Images/poster_estranho_mundo.jpeg';
import paranormal_capa from '../Images/poster_paranorman.jpeg';
import noiva_capa from '../Images/poster_noiva_cadaver.jpeg';
import viva_capa from '../Images/poster_viva_vida.jpeg';
import piratas_capa from '../Images/poster_piratas_pirados.jpeg';
import festa_capa from '../Images/poster_festa_ceu.jpeg';
import alita_capa from '../Images/poster_alita.jpg';
import alice_capa from '../Images/poster_alice.jpg';
import annabelle from '../Images/poster_annabelle.jpg';
import bela_fera_capa from '../Images/poster_bela_fera.jpeg';
import black_phone_capa from '../Images/poster_black_phone.jpg';
import cruella_capa from '../Images/poster_cruella.jpg';
import it_capa from '../Images/poster_it.jpg';
import malevola_capa from '../Images/poster_malevola.jpg';
import morte_capa from '../Images/poster_morte_parabens.jpg';
import fabrica_capa from '../Images/poster_fabrica_chocolate.jpg';
import rango_capa from '../Images/poster_rango.jpg';
import peculiares_capa from '../Images/poster_peculiares.jpg';
import tesoura_capa from '../Images/poster_tesoura.jpg';
import panico_capa from '../Images/poster_panico.jpg';
import nove_capa from '../Images/poster_nove.jpg';
import oz_capa from '../Images/poster_oz.jpg';

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
                    <img src={oz} alt="Coraline" className="slider-image " />
                    </div>
                    <div className="slide">
                    <img src={frank} alt="Frankenweenie" className="slider-image" />
                    </div>
                    <div className="slide">
                    <img src={telefone} alt="Megamente" className="slider-image " />
                    </div>
                    <div className="slide">
                    <img src={paranormal} alt="Megamente" className="slider-image" />
                    </div>
                    <div className="slide">
                    <img src={coraline} alt="" className="slider-image coraline" />
                    </div>
                    <div className="slide">
                    <img src={alice} alt="Megamente" className="slider-image" />
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

                    <img src={alice_capa} alt="Filme 2" className="catalog-image" />

                    <img src={annabelle} alt="Filme 2" className="catalog-image" />

                    <img src={frank_capa} alt="Filme 2" className="catalog-image" />

                    <img src={alita_capa} alt="Filme 2" className="catalog-image" />

                    <img src={megamente_capa} alt="Filme 3" className="catalog-image" />

                    <img src={cruella_capa} alt="Filme 2" className="catalog-image" />

                    <img src={bela_fera_capa} alt="Filme 2" className="catalog-image" />

                    <img src={viva_capa} alt="Filme 4" className="catalog-image" />

                    <img src={black_phone_capa} alt="Filme 2" className="catalog-image" />

                    <img src={jack_capa} alt="Filme 4" className="catalog-image" />

                    <img src={fabrica_capa} alt="Filme 4" className="catalog-image" />

                    <img src={it_capa} alt="Filme 4" className="catalog-image" />

                    <img src={noiva_capa} alt="Filme 4" className="catalog-image" />

                    <img src={paranormal_capa} alt="Filme 4" className="catalog-image" />

                    <img src={malevola_capa} alt="Filme 4" className="catalog-image" />

                    <img src={morte_capa} alt="Filme 4" className="catalog-image" />

                    <img src={piratas_capa} alt="Filme 4" className="catalog-image" />

                    <img src={peculiares_capa} alt="Filme 4" className="catalog-image" />

                    <img src={rango_capa} alt="Filme 4" className="catalog-image" />

                    <img src={tesoura_capa} alt="Filme 4" className="catalog-image" />

                    <img src={festa_capa} alt="Filme 4" className="catalog-image" />

                    <img src={panico_capa} alt="Filme 4" className="catalog-image" />

                    <img src={nove_capa} alt="Filme 4" className="catalog-image" />

                    <img src={oz_capa} alt="Filme 4" className="catalog-image" />

                </div>

                </div>

                

            </div>
        </div>
        </div>
                
    );
}
export default FilmsPage;