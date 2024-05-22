import React from "react";
import como_era from '../Images/livro_como_era.jpg';
import contos from '../Images/livro_contos.jpg';
import coraline from '../Images/livro_coraline.jpg';
import crepusculo from '../Images/livro_crepusculo.jpg';
import gato_preto from '../Images/livro_gato_preto.jpg';
import insurgente from '../Images/livro_insurgente.jpg';
import it from '../Images/livro_it.jpg';
import pijama from '../Images/livro_pijama.jpg';
import vbs from '../Images/livro_vbs.jpg';
import divergente from '../Images/livro_divergente.jpg';
import hp_enigma from '../Images/livro_hp_enigma.jpg';
import hp_reliquias from '../Images/livro_hp_reliquias.jpg';
import pj from '../Images/livro_pj.jpg';
import jv from '../Images/livro_jv.jpg';
import orgulho from '../Images/livro_orgulho.jpg';



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

                            <img src={como_era} alt="Filme 1" className="catalog-image"/>

                            <img src={contos} alt="Filme 2" className="catalog-image" />

                            <img src={coraline} alt="Filme 3" className="catalog-image" />

                            <img src={crepusculo} alt="Filme 4" className="catalog-image" />

                            <img src={gato_preto} alt="Filme 4" className="catalog-image" />

                            <img src={it} alt="Filme 4" className="catalog-image" />

                            <img src={pijama} alt="Filme 4" className="catalog-image" />

                            <img src={vbs} alt="Filme 4" className="catalog-image" />

                            <img src={hp_enigma} alt="Filme 4" className="catalog-image" />

                            <img src={insurgente} alt="Filme 4" className="catalog-image" />

                            <img src={divergente} alt="Filme 4" className="catalog-image" />

                            <img src={hp_reliquias} alt="Filme 4" className="catalog-image" />

                            <img src={pj} alt="Filme 4" className="catalog-image" />

                            <img src={orgulho} alt="Filme 4" className="catalog-image" />

                            <img src={jv} alt="Filme 4" className="catalog-image" />

                            </div>

                        </div>

                    </div>

            </div>


        </div>
    );
}

export default BooksPage;