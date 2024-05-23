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

            <div className="card mb-5 mx-5">

                <div className="card-header " >                        
                <h2>Catálogo de Livros</h2>
                </div>


                    <div className="card-body mt-2">

                        <div className="catalog-container">


                            <div className="catalog-grid ">

                            <img src={como_era} title="Como eu era antes de você" className="catalog-image"/>

                            <img src={contos} title="Contos Peculiares" className="catalog-image" />

                            <img src={coraline} title="Coraline " className="catalog-image" />

                            <img src={crepusculo} title="Crepusculo " className="catalog-image" />

                            <img src={gato_preto} title="O gato Preto " className="catalog-image" />

                            <img src={it} title="It a Coisa " className="catalog-image" />

                            <img src={pijama} title="O menino do pijama listrado " className="catalog-image" />

                            <img src={vbs} title="Vermelho Branco Sangue Azul " className="catalog-image" />

                            <img src={hp_enigma} title="Harry Potter e o enigma do príncipe " className="catalog-image" />

                            <img src={insurgente} title="Insurgente " className="catalog-image" />

                            <img src={divergente} title="Divergente " className="catalog-image" />

                            <img src={hp_reliquias} title="Harry Potter e as reliquias da morte" className="catalog-image" />

                            <img src={pj} title="Percy Jackson " className="catalog-image" />

                            <img src={orgulho} title="Orgulho e Preconceito " className="catalog-image" />

                            <img src={jv} title="Jogos Vorazes" className="catalog-image" />

                            </div>

                        </div>

                    </div>

            </div>

        </div>
    );
}

export default BooksPage;