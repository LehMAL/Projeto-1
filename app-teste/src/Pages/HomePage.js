import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {  Col, Carousel, Row, Card } from 'react-bootstrap';
import '../Components/ImageSliderComponent.css';
import { Link } from 'react-router-dom';



function HomePage(){

    const [filmes, setFilmes] = useState([]);
    const [livros, setLivros] = useState([]);

      useEffect(() => {
        async function buscarFilmes() {
            const filmes = axios.get("http://143.198.156.185/api/filmes").then(function (value) {
                setFilmes(value.data);console.log(value.data)
            }).catch(function (value) {
                console.log(value);
            });
        }

        async function buscarLivros() {
            const livros = axios.get("http://143.198.156.185/api/livros").then(function (value) {
                setLivros(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }
        buscarFilmes();
        buscarLivros();
    });


    return(
        <div className="pt-2">

            <div className="card mb-5 mx-3">
            <Row className="pt-2 pb-3">
                <Carousel s>
                    {filmes.map((filme, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={filme.imagens[0].url}
                                alt={filme.titulo}
                            />
                            <Carousel.Caption>
                                <h3>{filme.title}</h3>
                                <p>{filme.sinopse}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>

                <div className="card-header mx-3 mt-3 borda" >                        
                <h2>Filmes</h2>
                </div>


                <div className="card-body mt-2">

                      <div className="catalog-container">               

                      <div className="catalog-grid">
                            {filmes.map((filme, index) => (
                                <Col key={index} xs={6} sm={4} md={3} lg={2}>
                                <Link to={"/filme/" + filme.id} className="catalog-link">
                                    <Card className="catalog-image">
                                    <Card.Img src={filme.url_thumbnail} />
                                    <Card.Body>
                                        <Card.Title className="catalog-title">{filme.titulo}</Card.Title>
                                    </Card.Body>
                                    </Card>
                                </Link>
                                </Col>
                            ))}
                            </div>
                        </div>
                </div>

                    <div className="card-header mx-3 mt-3 borda" >                        
                    <h2>Livros</h2>
                    </div>
                    <div className="card-body mt-2">
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
     
    );
}

export default HomePage;