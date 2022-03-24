import React from 'react'
import styled from "styled-components"
import ImgSlider from './ImgSlider'

function Home() {
    return (
        <Container>
            <ImgSlider />
        </Container>
    )
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 70px);         // 70px is the height of the header
    padding: 0 calc(3.5vw + 5px);           // top & bottom are 0px and left & right are calc()
    // background-color: blue;
    position: relative;

    &:before {
        background: url("./images/home-background.png") center center / cover no-repeat fixed;     
        // the dash ("/") was needed!
        // center vertically & horizontally

        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }


`