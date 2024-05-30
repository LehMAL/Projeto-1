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
              color: "blue",
              borderRadius: "10px",
              border: "2px black solid"
            }}
          >
          </div>
        )
      };
   

    //UseEffect
    useEffect(() => {
        async function buscarFilmes() {
            const filmes = axios.get("http://143.198.156.185/api/home").then(function (value) {
                setFilmes(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }
        async function buscarLivros() {
            const livros = axios.get("http://143.198.156.185/api/home").then(function (value) {
                setLivros(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }
        buscarLivros();
        buscarFilmes();
    });


    return(
        <div className="pt-2">

            <div className="card mb-5 mx-3">
            <div className="slider-container">

            <Slider {...settings}>
                    {filmes.map((filme, index) => (
                        <div className="slide" key={index}>
                            <img
                                className="slider-image"
                                src={filme.imagens}
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
                <h2>Filmes</h2>
                </div>


                <div className="card-body mt-2">

                      <div className="catalog-container">               

                        <div className="catalog-grid">

                                {filmes.map((filme, index) => (
                                <Col xs={6} sm={4} md={3} lg={2}>
                                <Card className="catalog-image">
                                    <Card.Img  className="catalog-image" src={filme.url_thumbnail} />
                                    <Card.Body>
                                        <Card.Title className="catolog-title">{filme.titulo}</Card.Title>
                                    </Card.Body>
                                </Card>
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

                                {filmes.map((livros, index) => (
                                <Col xs={6} sm={4} md={3} lg={2}>
                                <Card className="catalog-image">
                                    <Card.Img  className="catalog-image" src={livros.url_thumbnail} />
                                    <Card.Body>
                                        <Card.Title className="catolog-title">{livros.titulo}</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                                ))}
                        </div>
                        </div>

                </div>
            </div>
     
    );
}

export default HomePage;