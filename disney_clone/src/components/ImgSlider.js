import React from 'react'
import styled from "styled-components"
// import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function ImgSlider() {
    let settings = {            // slider settings
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src = "../../public/images/Aintripin_logo.png" alt = "slider" />
            </Wrap>
            <Wrap>
                <img src = "./slider-badging.jpg" alt = "slider" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`

`

const Wrap = styled.div`

`