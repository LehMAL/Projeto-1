import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Carousel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Components/ImageSliderComponent.css';




function BooksPage(){

  const [livros, setLivros] = useState([]);


  useEffect(() => {
    async function buscarLivros() {
      const livros = axios.get("http://143.198.156.185/api/livros").then(function (value) {
        setLivros(value.data);
      }).catch(function (value) {
        console.log(value);
      });
    }

    buscarLivros();

  });


    return(
      <div className="pt-2">

      <div className="card mb-5 mx-5">

          <div className="card-header" >                        
          <h2>Catálogo de Livros</h2>
          </div>

              
            <div className="card-body mt-2">
            <div className="catalog-container">               

            <div className="catalog-grid">

                {livros.map((livro, index) => (
                <Col key={index} xs={6} sm={4} md={3} lg={2}>
                <Link to={"/livro/" + livro.id} className="catalog-link">
                    <Card className="catalog-image">
                    <Card.Img src={livro.url_thumbnail} />
                    <Card.Body>
                        <Card.Title className="catalog-title">{livro.titulo}</Card.Title>
                    </Card.Body>
                    </Card>
                </Link>
                </Col>
                ))}     
                </div>

              </div>
            
            </div>
        </div>
        </div>
                
    );
}
export default BooksPage;