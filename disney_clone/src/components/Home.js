import React, { useEffect, useState, useReducer } from 'react'        // useEffect allows us to grab the movies 
import styled from "styled-components"
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
// import firebase from "firebase" 
// import db from './firebase'
// import db from './firebase.js'   
// import firebase from '../firebase'
// import default db from "./firebase"


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import db from "firebase/Database";
import database from "firebase/Database";

// import db from "firebase";

function Home() {

    // useEffect(() => {
    //     console.log("SAY!");
    // }, [])


    useEffect(() => {
        database.collection("movies").onSnapshot((snapshot)=> {
            console.log(snapshot);
        })
    }, [])

    // console.log("SAY!");

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies /> 
        </Container>
    )
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 70px);         // 70px is the height of the header
    padding: 0 calc(3.5vw + 5px);           // top & bottom are 0px and left & right are calc()
    // background-color: blue;
    position: relative;
    overflow-x: hidden;                     // hide the overflow so the page won't have the horizontal slider

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
