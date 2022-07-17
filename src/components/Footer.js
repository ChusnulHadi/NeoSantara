// import Link from 'react-scroll/modules/components/Link';
import Link from 'react-scroll/modules/components/Link';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <Title>
                <Link to='home' smooth={true} spy={true}>
                    <h1>neo santara solusi</h1>
                </Link>
            </Title>
            <Call>
                <button onClick={(e) => {
                    window.location.href = "mailto:marketing@neosantarasolusi.net";
                    e.preventDefault();
                }}>
                    Email : marketing@neosantarasolusi.net
                </button>
                <button onClick={(e) => {
                    window.location.href = "tel:+628113300901";
                    e.preventDefault();
                }}>
                    Call : +62 811 3300 901
                </button>
            </Call>
            <Credits>
                <p>&trade; Neo Santara Solusi est. 2021</p>
            </Credits>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.footer`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
    background-color: #ebebeb;

    border-top: 3px solid black;
`

const Title = styled.div`
width: 100%;
text-transform: uppercase;
font-family: 'MOONFARK';

&:hover {
    cursor:pointer;
}
`

const Call = styled.div`
width: 100%;
button {
    background: none;
    border: none;
    letter-spacing: 0.125em;
    transition: 0.3s;

    margin: 0.25em 0.75em;

    &:hover {
        cursor: pointer;
        font-weight: bold;
        transition: 0.3s;
    }
}
`
const Credits = styled.div`
width: 100%;
`