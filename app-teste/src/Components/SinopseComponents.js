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
        <div className="card">
          <div className="card-body body-sinopse">
            <div className="image">
              <img src={filme.url_thumbnail} height={500} alt={filme.titulo} />
            </div>
            <div className="description">
              <div className="card-header mx-3 mt-3 borda">
                <b>{filme.titulo}</b>
              </div><br/>
              <div className="sinopse mx-3 mt-3 ">
                {filme.sinopse}
              </div>
            </div>
          </div>
        </div>
      );
      
};

export default Sinopse;