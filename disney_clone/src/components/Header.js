import React from 'react'
import styled from "styled-components"

function Header() {
    return (
        <Nav>
            <Logo src = "./images/logo.svg" />
            <NavMenu>
                <a>
                    <img src = "./images/home-icon.svg" alt = "img"/> 
                    <span>Home</span>
                </a>
            </NavMenu>
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
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display: flex;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;            // 0 top & o bottom; 12 px letf & right
    }

    img { 
        height: 20px;
    }
`