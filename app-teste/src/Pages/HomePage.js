import bela_fera_capa from '../Images/poster_bela_fera.jpeg';
import black_phone_capa from '../Images/poster_black_phone.jpg';
import it_capa from '../Images/poster_it.jpg';
import malevola_capa from '../Images/poster_malevola.jpg';
import morte_capa from '../Images/poster_morte_parabens.jpg';
import fabrica_capa from '../Images/poster_fabrica_chocolate.jpg';
import rango_capa from '../Images/poster_rango.jpg';
import peculiares_capa from '../Images/poster_peculiares.jpg';
import paranormal_capa from '../Images/poster_paranorman.jpeg';
import piratas_capa from '../Images/poster_piratas_pirados.jpeg';
import festa_capa from '../Images/poster_festa_ceu.jpeg';
import tesoura_capa from '../Images/poster_tesoura.jpg';
import panico_capa from '../Images/poster_panico.jpg';
import nove_capa from '../Images/poster_nove.jpg';
import oz_capa from '../Images/poster_oz.jpg';
import gato_preto from '../Images/livro_gato_preto.jpg';
import insurgente from '../Images/livro_insurgente.jpg';
import it from '../Images/livro_it.jpg';
import pijama from '../Images/livro_pijama.jpg';
import vbs from '../Images/livro_vbs.jpg';
import divergente from '../Images/livro_divergente.jpg';
import hp_enigma from '../Images/livro_hp_enigma.jpg';
import hp_reliquias from '../Images/livro_hp_reliquias.jpg';
import pj from '../Images/livro_pj.jpg';
import orgulho from '../Images/livro_orgulho.jpg';

function HomePage(){


    return(
        <div className="pt-2">

            <div className="card mb-5 mx-3">

                <div className="card-header " >                        
                <h2>Livros</h2>
                </div>


                    <div className="card-body mt-2">

                        <div className="catalog-container">


                            <div className="catalog-grid ">

                        
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

                           
                      <div className='card-header  h2'>Filmes</div>
                

                <img src={bela_fera_capa} alt="Filme 2" className="catalog-image" />


                 <img src={black_phone_capa} alt="Filme 2" className="catalog-image" />



<img src={fabrica_capa} alt="Filme 4" className="catalog-image" />

<img src={it_capa} alt="Filme 4" className="catalog-image" />

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

export default HomePage;