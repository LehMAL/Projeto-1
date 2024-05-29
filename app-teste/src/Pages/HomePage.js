import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {  Row, Col, Card } from 'react-bootstrap';
import Slider from "react-slick";
import '../Components/ImageSliderComponent.css';



function HomePage(){

    const [filmes, setFilmes] = useState([]);
    const [livros, setLivros] = useState([]);

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
              color: "black",
              borderRadius: "10px",
              border: "5px black solid"
            }}
          >
          </div>
        )
      };
   

    //realizar ações ao iniciar componente
    useEffect(() => {
        async function buscarFilmes() {
            const filmes = axios.get("http://143.198.156.185/api/home").then(function (value) {
                setFilmes(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }

        async function buscaLivros() {
            const filmes = axios.get("http://143.198.156.185/api/home").then(function (value) {
                setLivros(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }
        buscarFilmes();
        buscaLivros();
    });


    return(
        <div className="pt-2">

            <div className="card mb-5 mx-3">
            <div className="slider-container">

            <Slider {...settings}>
                    {filmes.map((filme, index) => (
                        <div className="slide" key={index}>
                            <img
                                className="d-block w-100"
                                src={filme.imagens[2]}
                                alt={filme.titulo}
                            />
                            <div className="slide">
                                <h3>{filme.title}</h3>
                                <p>{filme.sinopse}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>

                <div className="card-header mx-3 mt-3 borda" >                        
                <h2>Livros</h2>
                </div>


                    <div className="card-body mt-2">

                        <div className="catalog-container">


                            <div className="catalog-grid ">

                            <Row className="pt-2 pb-3">
                            {livros.map((livro, index) => (
                            <Col xs={6} sm={4} md={3} lg={2}>
                            <Card>
                            <Card.Img variant="top" src={livro.url_thumbnail} />
                            <Card.Body>
                                <Card.Title>{livro.titulo}</Card.Title>
                            </Card.Body>
                            </Card>
                            </Col>
                            ))}
                            </Row>
                        </div>

                           
                      <br/><div className='card-header mt-3 borda'><h2>Filmes</h2></div> <br/>

                      <div className="catalog-container">

                      <div className="catalog-grid ">
               

                        <Row className="pt-2 pb-3">
                        {filmes.map((filme, index) => (
                        <Col xs={6} sm={4} md={3} lg={2}>
                        <Card>
                            <Card.Img variant="top" src={filme.url_thumbnail} />
                            <Card.Body>
                                <Card.Title>{filme.titulo}</Card.Title>
                            </Card.Body>
                        </Card>
                        </Col>
                         ))}
                        </Row>

                            </div>
                        </div>
                    </div>
            </div>
    </div>
    </div>


    
    );
}

export default HomePage;