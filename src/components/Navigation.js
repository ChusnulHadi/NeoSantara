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
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                    </svg> */}
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