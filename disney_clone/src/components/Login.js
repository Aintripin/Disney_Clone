import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src = "../images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src = "../images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        content: "";
        left: 0;
        right: 0;
        z-index: -1;
        background-image: url("../images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: .8;
        
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px; 
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;

`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background: #0063E5;
    font-weight: bold;
    padding: 17px 0px;
    color: #F9F9F9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1.5px; 
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
    margin-top: 8px;
    margin-bottom: 12px;
    box-shadow: rgb(0 0 0 / 9%) 0px 26px 30px -10px,
    rgb(0 0 0 / 13%) 0px 16px 10px -10px;

    &:hover {
        background: #0041D4;
        letter-spacing: 1.7px; 
        transform: scale(1.011);
        box-shadow: rgb(0 0 0 / 20%) 0px 40px 58px -16px,
        rgb(0 0 0 / 12%) 0px 30px 22px -10px;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`