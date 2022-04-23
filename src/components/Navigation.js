import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
// import * as Scroll from "react-scroll";
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
                    <Link to="Home">
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
                        <a href="Home">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Partner</a>
                    </li>
                    <li>
                        <a href="#">Carrer</a>
                    </li>
                </ul>
            </Nav>
        </Wraper>
    )
}

export default Navigation;

const Wraper = styled.div`
    overflow: hidden;
    /* background-color: ${color.yellow}; */
    /* width: 100vw; */
    margin: 1.5em;
    display: flex;
    flex-direction: column;

    position: relative;
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

    @media (min-width: 500px) {
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

    @media (min-width : 500px) {
        display: none;
    }
    
`;
const Logo = styled.div`

    margin: 0.5em 1em;

    img {
        height: 3em;
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

        background-color: ${color.darkblue};

        li {
            list-style-type:none;

            padding: 0.5em 0;
            margin: 0 0;

            transition: 0.3s ease-in-out;

            &:hover {
                background-color: orange;
                cursor: pointer;
            }
            a {
                text-decoration:none;
                color:white;
                
                padding-bottom: 0.5em;
            }
        }
    }

    /* desktop view */
    @media (min-width: 500px) {
        display: flex !important;
        flex-direction: row;
        justify-content: space-between;

        ul {
            background-color: transparent;
            margin: 1.5em;
            li {
                display: inline;
                margin: 2em 1em;

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