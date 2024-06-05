import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Sinopse = () => {
    const { id } = useParams();

    const [filme, setFilme] = useState('');

    useEffect(() => {
        async function buscarFilme() {
            const filmes = axios.get(`http://143.198.156.185/api/filmes/porid/${id}`).then(function (value) {
                setFilme(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }

        buscarFilme();
    });

    return (
      <div className="pt-4 mx-5">
        <div className="card col-lg-8 col-md-auto col-sm-auto mx-auto">
          <div className="card-body body-sinopse">
            <div className="image">
              <img src={filme.url_thumbnail} height={500} alt={filme.titulo} />
            </div>
            <div className="description">
              <div className="card-header  borda">
                <b>{filme.titulo}</b>
              </div><br/>
              <div className="sinopse">
                {filme.sinopse}
              </div> <br/><br/>
              <div className="card-footer borda">
              <b>CATEGORIA:</b> {filme.categoria}
          </div> 
          </div>
          </div>
          
          </div>
        </div>
      );
      
};

export default Sinopse;