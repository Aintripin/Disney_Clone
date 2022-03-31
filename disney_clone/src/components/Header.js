import React from 'react'
import styled from "styled-components"

function Header() {
    return (
        <Nav>
            <Logo src = "./images/logo.svg" />
            <NavMenu>
                <a>
                    <img src = "./images/home-icon.svg" alt = "img"/> 
                    <span>HOME</span>
                </a>
                <a>
                    <img src = "./images/search-icon.svg" alt = "img"/> 
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src = "./images/watchlist-icon.svg" alt = "img"/> 
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src = "./images/original-icon.svg" alt = "img"/> 
                    <span>ORIGINAL</span>
                </a>
                <a>
                    <img src = "./images/movie-icon.svg" alt = "img"/> 
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src = "./images/series-icon.svg" alt = "img"/> 
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UserImg src = "../images/Aintripin_logo.png"/>
        </Nav>
    )
}

export default Header


const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;            // center the items vertically
    padding: 0 36px;                // 0 top & bottom; 36px left & right

    overflow-x: hidden;             // hide the overflow so the page won't have the horizontal slider
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;                        // expands as much as possible; stretches horizontally
    margin-left: 25px;              // adding some spacing between icons
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;            // 0 top & o bottom; 12 px letf & right
        cursor: pointer;
    

        img { 
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`