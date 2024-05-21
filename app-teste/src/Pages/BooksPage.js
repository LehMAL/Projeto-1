import React from "react";
import coraline_capa from '../Images/coraline_capa.jpg';
import megamente_capa from '../Images/megamente_capa.jpg';
import frank_capa from '../Images/Frankenweenie_capa.png';
import '../Components/ImageSliderComponent.css';

function BooksPage(){


    return(
        <div className="pt-2">

            <div className="card mb-5 mx-3">

                <div className="card-header " >                        
                <h2>Catálogo de Livros</h2>
                </div>


                    <div className="card-body mt-2">

                        <div className="catalog-container">


                            <div className="catalog-grid ">

                            <img src={coraline_capa} alt="Filme 1" className="catalog-image"/>

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

export default BooksPage;