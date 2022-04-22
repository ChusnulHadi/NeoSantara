import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styledComponents from "styled-components";


const Navigation = () => {

    return (

        <Wraper>
            <div className="top">
                <Logo>
                    <img src="/assets/images/logoNSS.png" alt="Neo Santara Solusi" />
                </Logo>
                <Button>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
            </div>
            <Nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
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

const Wraper = styledComponents.div`
    overflow: hidden;
    background-color: orange;
    width: 100vw;

    display: flex;
    flex-direction: column;

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

`;

const Button = styledComponents.div`
    width: 2em;
    height: 2em;

    right: 0px;

    margin: 1em 1em;

    svg {
        color: white;
    }

    &:hover {
        background-color: white;
    }
    
`;
const Logo = styledComponents.div`

    margin: 0.5em 1em;

    img {
        height: 3em;
    }
`

const Nav = styledComponents.nav`
    display:flex;
    flex-direction: column;

    margin:0;
    padding:0;
    ul {
        padding: 0;
        margin: 0;
        text-align: center;

        background-color: black;

        li {
            list-style-type:none;

            padding: 0;
            margin: 0.30em 0;

            &:hover {
                background-color: orange;
                cursor: pointer;
            }
            a {
                text-decoration:none;
                color:white;
            }
        }
    }
`