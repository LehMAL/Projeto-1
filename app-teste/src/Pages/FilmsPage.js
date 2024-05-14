import Slider from "react-slick";
import React from "react";
import coraline from '../Images/coraline.jpg';
import frank from '../Images/frank.png';
import megamente from '../Images/megamente.jpg';



function FilmsPage(){

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true
      };


    return(
        <div className="pt-2">

            <div className="card">

                <div className="slider-container">

                    <Slider {...settings}>

                  
                    <img src={coraline}/>
                  

                    
                    <img src={frank} />                   
                  

                   
                    <img src={megamente} />                    
                   

                    
                </Slider>
                
                </div><br/>

                </div>

                <div className="card-body mt-2">
                

            </div>
        </div>
                
    );
}

export default FilmsPage;