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

                <div className="card-header mx-3 mt-3 borda" >                        
                <h2>Livros</h2>
                </div>


                    <div className="card-body mt-2">

                        <div className="catalog-container">


                            <div className="catalog-grid ">

                        
                            <img src={gato_preto} title=' O Gato Preto' className="catalog-image" />

                            <img src={it} title='it a Coisa' className="catalog-image" />

                            <img src={pijama} title='O menino do Pijama Listrado' className="catalog-image" />

                            <img src={vbs} title='Vermelho Branco Sangue Azul' className="catalog-image" />

                            <img src={hp_enigma} title='Harry Potter e o enigma do príncipe' className="catalog-image" />

                            <img src={insurgente} title='Insurgente' className="catalog-image" />

                            <img src={divergente} title='Divergente' className="catalog-image" />

                            <img src={hp_reliquias} title='Harry Potter e as relíquias da morte' className="catalog-image" />

                            <img src={pj} title='Percy Jackson' className="catalog-image" />

                            <img src={orgulho} title='Orgulho e Preconceito' className="catalog-image" />
                        </div>
                        </div>

                           
                      <br/><div className='card-header mt-3 borda'><h2>Filmes</h2></div> <br/>

                      <div className="catalog-container">

                      <div className="catalog-grid ">
               

                            <img src={bela_fera_capa} title='A Bela e a Fera' className="catalog-image" />

                            <img src={black_phone_capa} title='Telefone Preto' className="catalog-image" />

                            <img src={fabrica_capa} title='A fantastica fabrica de chocolate' className="catalog-image" />

                            <img src={it_capa} title='It a Coisa' className="catalog-image" />

                            <img src={paranormal_capa} title='Paranorman' className="catalog-image" />

                            <img src={malevola_capa} title='Malévola' className="catalog-image" />

                            <img src={morte_capa} title='A Morte te da Parabéns' className="catalog-image" />

                            <img src={piratas_capa} title='Piratas Pirados' className="catalog-image" />

                            <img src={peculiares_capa} title='O lar das crianças Peculiares' className="catalog-image" />

                            <img src={rango_capa} title='Rango' className="catalog-image" />

                            <img src={tesoura_capa} title='Edward mãos de tesoura' className="catalog-image" />

                            <img src={festa_capa} title='Viva a vida é uma festa' className="catalog-image" />

                            <img src={panico_capa} title='Panico' className="catalog-image" />

                            <img src={nove_capa} title='Nove em busca da salvação' className="catalog-image" />

                            <img src={oz_capa} title='O mágico de Oz' className="catalog-image" />


                            </div>
                        </div>
                    </div>
            </div>
    </div>


    
    );
}

export default HomePage;