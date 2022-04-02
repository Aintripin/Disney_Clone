import React from 'react'
import styled from 'styled-components'
import baoimg from "../images/bao-disney.png"

function Detail() {
    return (
        <Container>
            <Background>
                <img src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt = "bg"/>
            </Background>
            <ImageTitle>
                {/* <img src = "https://www.vippng.com/png/full/395-3953813_java-logo-transparent-background.png" alt = "bao" /> */}
                <img src = {baoimg} alt = "bao_img" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src = {require("../images/play-icon-black.png")} alt = "playbutton"/>
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src = "../images/play-icon-white.png" alt = "trailer"/>
                    <span>TRAILER</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupWatch>
                    <img src = "../images/group-icon.png" alt = "groupwatch"/>
                </GroupWatch>
            </Controls>
            <SubTitle>
                2018 • 7m • Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
        </Container>
    )
}

export default Detail


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;            // make the header visible
    opacity: .8;            // make the bg darker

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 24px;
    margin-bottom: 6px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    // flex-direction: row;
    // justify-content: center;
    align-items: center;
`


const PlayButton = styled.button`
    cursor: pointer;
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;          // indent the content of the button itself
    margin-right: 22px;         // shift the button next to this one
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

    &:hover {
        background: rgb(198, 198, 198);
    }

`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, .3);
    border: 1px solid rgb(249, 249, 249); 
    color: rgb(249, 249, 249);
    text-transform: uppercase;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

    &:hover {
        color: rgba(0, 0, 0, .9);
    }
`

const AddButton = styled.button`
    margin-right: 16px;                 // push the right button away by 16px
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, .6);
    cursor: pointer;

    // object-fit: cover;
    // margin: 4px;

    span {
        font-size: 30px;
        color: white;
    }
`

const GroupWatch = styled(AddButton)`
    background: rgba(0, 0, 0, .85);
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

    &:hover {
        background: rgba(0, 0, 0, .99);
    }
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;           // creates spacing 
    font-size: 20px;
    margin-top: 16px; 
    color: rgb(249, 249, 249);
    max-width: 760px;
`