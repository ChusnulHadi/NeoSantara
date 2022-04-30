import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-scroll";
import { color } from "./colors";


const Navigation = () => {
    const [isMenu, setIsMenu] = useState(false);
    const menu = () => {
        setIsMenu(!isMenu);
        if (isMenu) {
            window.document.getElementById('nav').style.display = 'none';
        } else {
            window.document.getElementById('nav').style.display = 'flex';
        }
    }

    return (

        <Wraper>
            <div className="top">
                <Logo>
                    <Link to="/">
                        <img src="/assets/images/logoNSS.png" alt="Neo Santara Solusi" />
                    </Link>
                </Logo>
                <Button onClick={menu}>
                    {(isMenu) ?
                        <FontAwesomeIcon size="xl" icon={faX} />
                        :
                        <FontAwesomeIcon size="xl" icon={faBars} />
                    }
                </Button>
            </div>
            <Nav id="nav">
                <ul>
                    <li>
                        <ButtonNav>Home</ButtonNav>
                    </li>
                    <li>
                        <ButtonNav>About</ButtonNav>
                    </li>
                    <li>
                        <ButtonNav>Partner</ButtonNav>

                    </li>
                    <li>
                        <ButtonNav>Carreer</ButtonNav>
                    </li>
                </ul>
            </Nav>
        </Wraper>
    )
}

export default Navigation;

const Wraper = styled.div`
    overflow: hidden;
    width: calc(100vw - 3em);
    margin: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    z-index: 10;

    /* glassmorphism effect */
    backdrop-filter: blur(18px) saturate(181%);
    -webkit-backdrop-filter: blur(18px) saturate(181%);
    background-color: rgba(255, 255, 255, 0.57);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
    }

`;

const Button = styled.div`

    right: 0px;

    margin: 1em 1em;

    vertical-align: middle;

    transition: 0.3s ease-in-out;


    &:hover {
        color: white;
        cursor: pointer;
    }

    @media (min-width : 600px) {
        display: none;
    }
    
`;
const Logo = styled.div`

    margin: auto 1em;

    img {
        max-width: 10em; 
    }

    &:hover {
        cursor: pointer;
    }
`

const Nav = styled.nav`
    display:none;
    flex-direction: column;

    transition: display 0.5s ease-in-out;

    margin:0;
    padding:0;
    ul {
        padding: 0;
        margin: 0;
        text-align: center;

        position: relative;
        z-index: 11;

        border-top: 1px solid black;

        li {
            list-style-type:none;

            padding: 0.5em 0;
            margin: 0 0;
        }
    }

    /* desktop view */
    @media (min-width: 600px) {
        display: flex !important;
        flex-direction: row;
        justify-content: space-between;

        ul {
            background-color: transparent;
            margin: 1.5em;

            border-top: none;
            li {
                display: inline;
                margin: 2em 0.5em;

                &:hover {
                    background-color: transparent;
                }

                a {
                    color: ${color.darkblue};
                    &:hover {
                        font-weight: bold;
                        color: ${color.orange};

                        transition: 0.1s ease-in;

                        border-bottom: 1.5px solid ${color.orange};
                    }
                }
            }
        }
    }
`

const ButtonNav = styled.button`
    width: 128px;
    height: 1.5em;
    font-size:1em;
    cursor:pointer;
    border:none;
    outline: none;
    background: transparent;
    color:black;
    transition: all 0.5s;
    z-index:1;
    position: relative;

    font-family: 'Rubik';

    &::before {
        content: "";
        position: absolute;
        top:0;
        left:0;
        width: 2.5px;
        height: 100%;
        background-color:black;
        border-radius: 5px;
        z-index: -1;
        transition: all 0.5s;
        }

    &:hover::before {
        width: 100%;
    }

    &:hover {
        color: white;
    }
    &:active::before {
        background: #b9b9b9;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`